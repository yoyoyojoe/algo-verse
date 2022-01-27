import React from "react";

const UserLogin = (props) => {
  function send() {
    console.log(document.getElementById("loginUsername").value)
    console.log(document.getElementById("loginPassword").value)
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById("loginUsername").value,
        password: document.getElementById("loginPassword").value,
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      if (response.status===200){
        if (response.ok === true) {
          props.verify();
        } else {
          document.getElementById("loginfailed").style.display="block";
        }
        console.log('display disappears');
        document.getElementById("UserLogin").style.display = "none";
      } else {
        console.log('login failed');
        document.getElementById("loginfailed").style.display="block";
      }
    });
  }

function redirectToSignUp(){
  document.getElementById("UserCreator").style.display = "block";
  document.getElementById("UserLogin").style.display = "none";
}
  return (
    <div className="UserLogin" >
      <h2>Login</h2>
      <input
        className="textInput"
        id="loginUsername"
        placeholder="Enter username"
      ></input><br/>
      <input
        className="textInput"
        id="loginPassword"
        type="password"
        placeholder="Enter password"
      ></input><br/><br/>
      <div className="loginButtons">
      <button id="loginButton" className="submitButton" onClick={send}>
        Login
      </button>
      <button id="createAccount" className="submitButton" onClick={redirectToSignUp}>
        Create an account
      </button>
      </div>
      <p align="center" id="loginfailed" style={{display: "none"}}>Username/password does not exist</p>
    </div>
  );
};

export default UserLogin;
