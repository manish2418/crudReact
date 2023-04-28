import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [data, setdata] = useState([]);

  function getData() {
    axios
      .get("https://643a7dedbd3623f1b9b48fdc.mockapi.io/crud-react")
      .then((res) => {
        setdata(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://643a7dedbd3623f1b9b48fdc.mockapi.io/crud-react/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, Name, Email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", Name);
    localStorage.setItem("email", Email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Read Operation</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.Name}</td>
                  <td>{eachData.Email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.Name,
                            eachData.Email
                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
}

export default Read;
