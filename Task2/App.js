import React from "react";
import "./App.css";
import Cards from "./users";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // Fetch data from https://reqres.in/api/users?page=1
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="wholecontainer">
        <nav className="navbar navbar-expand-lg navbar-light glassnav">
          <div className="container-fluid ">
            <span className="brandname">LGM</span>
            <span className="but">
              <ul class="navbar-nav ms-auto  me-5">
                <button className="Btn" onClick={handleClick}>
                  Get Users
                </button>
              </ul>
            </span>
          </div>
        </nav>

        <div className="container">
          <div className="row justify-content-center ">
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div className="col-4 mt-5">
                  <span className="loader"></span>
                </div>
              )
            ) : (
              <div className="col-6  col-sm-8 text">
                <b>Click on "Get Users" button to get the LGM Users</b>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

