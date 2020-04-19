import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";
import "./login";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="mainBody">
      <div class="login">
        <header class="header">
          <span class="text">Login here</span>
          <span class="loader"></span>
        </header>
        <form class="form">
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          ></input>

          <input
            placeholder="Room"
            className="joinInput"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          ></input>

          <Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="btn" type="submit"></button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Join;
