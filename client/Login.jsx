import React from "react";

const UserLogin = (props) => {
  function send() {
    console.log('login username:', document.getElementById("loginUsername").value);
    console.log('login password:', document.getElementById("loginPassword").value);

    fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById("loginUsername").value,
        password: document.getElementById("loginPassword").value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          if (response.ok === true) {
            props.verify();
          } else {
            document.getElementById("loginFailed").style.display = "block";
          }
          console.log('display disappears');
          console.log(document.getElementById("UserLogin"));
          document.getElementById("UserLogin").style.display = "none";
        } else {
          console.log('login failed');
          document.getElementById("loginFailed").style.display = "block";
        }
      });
  }

  function redirectToSignUp() {
    document.getElementById("UserCreator").style.display = "flex";
    document.getElementById("UserLogin").style.display = "none";
  }

  return (
    <div className="UserLogin" id="UserLogin" >
      <h2>Login</h2>
      <input
        className="textInput"
        id="loginUsername"
        placeholder="Enter username"
      ></input><br />
      <input
        className="textInput"
        id="loginPassword"
        type="password"
        placeholder="Enter password"
      ></input><br /><br />
      <div className="loginButtons">
        <button id="loginButton" className="submitButton" onClick={send}>
          Login
        </button>
        <button id="createAccount" className="submitButton" onClick={redirectToSignUp}>
          Create an account
        </button>
      </div>
      <p align="center" id="loginFailed" style={{ display: "none" }}>Username/password does not exist</p>
      <br />
    </div>
  );
};

export default UserLogin;
