import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth, database, storage } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { uid } from "uid";
import { ref, set, onValue, remove } from "firebase/database";
import { ref as sRef, uploadBytes, getDownloadURL } from "firebase/storage";
import Compressor from "compressorjs";

const AuthContext = React.createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  // const history = useHistory();
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  /*this is where out logged in user is saved in state, this can be accessed
    anywhere in our application by
    *******************************************************
    import { useAuth } from " path to AuthContext";
    const Component = () => {
        const {  currentUser } = useAuth();
      return (
        <h1> {currentUser.email}    </h1>
       );
    }
    **************************************************
    */
  var [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [usersApplications, setUsersApplications] = useState([]);
  const [selectedApplication, setselectedApplication] = useState({});
  const [userInfo, setUserInfo] = useState({});

  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  useEffect(() => {
    read();
    // addlistner();
  }, [currentUser]);

  async function signup(email, password) {
    try {
      /* calls the firebase/auth method createUserWithEmailAndPassword()
            this method passes in our auth,email,and password and will create
            a user in our firebase. then sets the currentUser to this user
            */
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      writeUserData();
    } catch (error) {
      console.log(error.message);
    }
  }
  //Login with email and pass
  async function login(email, password) {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function logout() {
    history.push("/");
    return auth.signOut();
  }

  function writeUserData() {
    var userReff = ref(database, "users/" + currentUser.uid + "/userinfo");
    var user = {
      uid: currentUser.uid,
      email: currentUser.email,
    };
    set(userReff, user);
  }
  function addPhoto(img) {
    console.log("in add photo");
    const uuid = uid();
    const imgref = sRef(
      storage,
      "users/" + currentUser.uid + "/photos/" + "profilepic"
    );

    new Compressor(img, {
      quality: 0.6,

      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success(result) {
        const formData = new FormData();

        // The third parameter is required for server
        formData.append("file", result, result.name);

        // Send the compressed image file to server with XMLHttpRequest.
        console.log(img);
        // axios.post("/path/to/upload", formData).then(() => {
        //   console.log("Upload success");
        // });
      },
      error(err) {
        console.log(err.message);
      },
    });
    uploadBytes(imgref, img).then((snapshot) => {
      console.log("Uploaded a blob or file!", img);
    });

    return {};
  }

  function getPhoto(img) {
    const imgref = sRef(
      storage,
      "users/" + currentUser.uid + "/photos/" + "profilepic"
    );
    getDownloadURL(sRef(storage, imgref))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        // Or inserted into an <img> element
        img.setAttribute("src", url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }
  async function read() {
    if (currentUser) {
      const str = currentUser.uid || "";
      let userApplicationsReff = ref(
        database,
        "users/" + str + "/applications"
      );
      onValue(userApplicationsReff, async (snapshot) => {
        await cleardata();
        const data = await snapshot.val();
        if (data !== null) {
          Object.values(data).map((application) => {
            setUsersApplications((oldArray) => [...oldArray, application]);
          });
        }
      });
      let userInfoRef = ref(database, "users/" + str + "/userinfo");
      onValue(userInfoRef, (snapshot) => {
        const data = snapshot.val();
        setUserInfo(data);
      });
    }
  }
  async function cleardata() {
    await setUsersApplications([]);
    await setUserInfo({});
  }

  async function writeApplicationData(application) {
    const uuid = uid();
    set(ref(database, "users/" + currentUser.uid + "/applications/" + uuid), {
      companyName: application.companyName,
      positionName: application.positionName,
      positionDescription: application.positionDescription,
      appliedAt: application.appliedAt,
      websiteUrl: application.websiteURL,
      uid: uuid,
    });
    console.log("set new application in database");
  }
  async function addEvent(event, id) {
    const uuid = uid();
    set(
      ref(
        database,
        "users/" + currentUser.uid + "/applications/" + id + "/events/" + uuid
      ),
      event
    );
    console.log("set new application in database");
  }
  async function updateSelectedApplication(uid) {
    await usersApplications.map((application) => {
      if (application.uid === uid) {
        setselectedApplication(application);
      }
    });
  }
  async function updateSingleApplication(updatedApplication, id) {
    var applicationRef = ref(
      database,
      "users/" + currentUser.uid + "/applications/" + id
    );
    console.log(applicationRef);

    set(applicationRef, updatedApplication);
  }
  async function deleteApplication(id) {
    var applicationRef = ref(
      database,
      "users/" + currentUser.uid + "/applications/" + id
    );
    console.log(applicationRef);

    remove(applicationRef);
  }
  async function deleteEvent(appId, id) {
    var eventRef = ref(
      database,
      "users/" + currentUser.uid + "/applications/" + appId + "/events/" + id
    );
    console.log(eventRef);

    remove(eventRef);
  }

  function updateUser(user) {
    var userReff = ref(database, "users/" + currentUser.uid + "/userinfo");
    setUserInfo(user);
    set(userReff, user);
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
    writeUserData,
    addPhoto,
    getPhoto,
    writeApplicationData,
    usersApplications,
    updateSelectedApplication,
    selectedApplication,
    updateSingleApplication,
    read,
    deleteApplication,
    addEvent,
    deleteEvent,
    updateUser,
    userInfo,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
