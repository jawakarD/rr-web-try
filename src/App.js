import logo from "./logo.svg";
import "./App.css";
import { record, Replayer } from "rrweb";
import { useEffect, useRef, useState } from "react";

function App() {
  useEffect(() => {
    record({
      emit(event) {
        let events = localStorage.getItem("EVENTS");
        events = events ? JSON.parse(events) : [];
        console.log(JSON.stringify([...events, event]));
        localStorage.setItem("EVENTS", JSON.stringify([...events, event]));
      },
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="text" />
      </header>
    </div>
  );
}

export default App;
