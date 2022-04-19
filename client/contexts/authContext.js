import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth, database } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { uid } from "uid";
import { ref, set, onValue, remove, get } from "firebase/database";

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

  const history = useHistory();

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

  useEffect(async () => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  function writeUserData() {
    var userReff = ref(database, "users/" + currentUser.uid + "/userinfo");
    var user = {
      uid: currentUser.uid,
      email: currentUser.email,
    };
    set(userReff, user);
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
    writeUserData,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
