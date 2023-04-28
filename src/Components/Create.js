import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "" };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://643a7dedbd3623f1b9b48fdc.mockapi.io/crud-react", {
        Name: Name,
        Email: Email,
        header,
      })

      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <h2>Create Operations</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
