import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const loader = async () => {
    setTimeout(function () {
      document.getElementById("myDiv").style.display = "none";
    }, 5000);
  };
  const loadUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUsers(jsonresponse);
  };

  return (
    <>
      <section className="wholecontainer">
        <nav className="navbar navbar-expand-lg navbar-light glassnav">
          <div className="container-fluid ">
            <span className="brandname">LGM</span>
            <span className="but">
              <ul class="navbar-nav ms-auto  me-5">
                <button className="Btn" onClick={(loader, loadUsers)}>
                  Get Users
                </button>
              </ul>
            </span>
          </div>
        </nav>
      </section>

      <div className="myDiv">
        <img id="myImage" src="src/giffy.gif"></img>
      </div>

      <ul>
        <h2>Users:</h2>
        {users.map(({ id, login, avatar_url }) => (
          <li key={id}>
            Name: {login}
            Avatar: {avatar_url}
          </li>
        ))}
      </ul>
    </>
  );
};
export default App;
