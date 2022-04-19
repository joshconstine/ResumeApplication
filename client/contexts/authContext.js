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
import { ref, set, onValue, remove, get } from "firebase/database";
import { ref as sRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { setApplications } from "../store/application";

//
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
    const uuid = uid();
    const imgref = sRef(
      storage,
      "users/" + currentUser.uid + "/photos/" + "profilepic"
    );
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
    console.log("in getphoto");
    getDownloadURL(sRef(storage, imgref))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();

        // Or inserted into an <img> element
        img.setAttribute("src", url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }
  async function read() {
    console.log("in read", currentUser);
    if (currentUser) {
      const str = currentUser.uid || "";
      console.log(str);
      let userApplicationsReff = ref(
        database,
        "users/" + str + "/applications"
      );
      onValue(userApplicationsReff, (snapshot) => {
        setApplications([]);
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((application) => {
            setUsersApplications((oldArray) => [...oldArray, application]);
          });
        }
      });
    }
    return;
  }

  async function writeApplicationData(application) {
    const uuid = uid();
    set(ref(database, "users/" + currentUser.uid + "/applications/" + uuid), {
      companyName: application.companyName,
      positionName: application.positionName,
      positionDescription: application.positionDescription,
      appliedAt: application.appliedAt,
      websiteURL: application.websiteURL,
      uid: uuid,
    });
    console.log("set new application in database");
  }
  async function updateSelectedApplication(uid) {
    usersApplications.map((application) => {
      if (application.uid === uid) {
        setselectedApplication(application);
        console.log("updated seledted application", selectedApplication);
      }
    });
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
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
