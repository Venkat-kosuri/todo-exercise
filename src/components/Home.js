import React, { useState, useEffect } from "react";
import axios from "axios";
import AddUser from "./AddUser";
const Home = () => {
  const [Data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  //fetching the api from the server //
  const fetchUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div
        className={
          darkMode
            ? "bg-dark text-light text-center p-4"
            : "bg-light text-dark text-center p-4"
        }
      >
        <div className="container">
          <div className="row">
            <center>
              <div className="col-xs-12 col-md-6">
                <div className="d-flex justify-content-around mt-3 mb-3">
                  <AddUser />
                  <button
                    className={
                      darkMode
                        ? "btn btn-outline-light"
                        : "btn btn-outline-dark"
                    }
                    onClick={toggleDarkMode}
                  >
                    {darkMode ? "Light mode" : "Dark mode"}
                  </button>
                </div>
                <table
                  className={
                    darkMode
                      ? "bg-dark text-light text-center p-4 table table-responsive-xs table-responsive-lg table-bordered"
                      : "bg-light text-dark text-center p-4 table table-responsive-xs table-responsive-lg table-bordered"
                  }
                >
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                    </tr>
                  </thead>
                  {Data.map((list) => (
                    <tbody>
                      <tr>
                        <th scope="row">
                          <img src={list.avatar} alt="" className="img-fluid" />
                        </th>
                        <th>{list.id}</th>
                        <td>{list.first_name}</td>
                        <td>{list.email}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
