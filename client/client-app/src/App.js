import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import WelcomePage from "./Components/LandingPage/WelcomePage";
import firebase from "firebase";
import "firebase/app/dist/auth";
import "firebase/app/dist/database";

firebase.initializeApp({
  apiKey: "AIzaSyCsCOKpdyfW4PXam7XPfJUIHgoEUbteWcE",
  authDomain: "creek-connect.firebaseapp.com",
  databaseURL:
    "https://creek-connect-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "creek-connect",
  storageBucket: "creek-connect.appspot.com",
  messagingSenderId: "107117143642",
  appId: "1:107117143642:web:4b31800ae9ee3b69175a63",
  measurementId: "G-40PEVDNL0V",
});

const auth = firebase.auth();
const db = firebase.database();

function App() {
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, []);

  const signup = async () => {
    return auth().CreateUserWithEmailAndPassword(email, password);
  };

  const signin = async () => {
    return auth().signInWithEmailAndPassword(email, password);
  };

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.useDeviceLanguage();

    try {
      await auth.signInWithPop(provider);
    } catch (eror) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut;
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderContent = () => {
    if (initializing) return "Loading...";
  };

  if (user) return <Home user={user} />;

  return (
    ((
      <div>
        {user ? <WelcomePage /> : <button onClick={signup}> Sign In</button>}
      </div>
    ),
    (
      <div>
        {user ? (
          " Welcome to Creek Connect"
        ) : (
          <button onClick={signin}> Sign In</button>
        )}
        <p> or </p>(
        <button onclick={signInWithGoogle}> Sign in with google</button>)
      </div>
    )),
    (
      <div>
        {user ? (
          <Home />
        ) : (
          <button onClick={signOut} className="signout">
            SignOut
          </button>
        )}
      </div>
    )
  );
}

export default App;
