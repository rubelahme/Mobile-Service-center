import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { useContext } from "react";
import { createProvider } from "../../../App";
import { useHistory, useLocation } from "react-router";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useContext(createProvider);
  const provider = new firebase.auth.GoogleAuthProvider();

  const handleClick = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  console.log(user);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="p-5 text-center">
              <button className="btn btn-warning" onClick={handleClick}>
                Google Sing in
              </button>
              <h1>{user.email}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
