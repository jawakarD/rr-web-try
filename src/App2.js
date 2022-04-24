import logo from "./logo.svg";
import "./App.css";
import { Replayer } from "rrweb";
import { useEffect, useRef } from "react";
import App1 from "./App";

function App() {
  const side2Ref = useRef();
  const playerRef = useRef();

  useEffect(() => {
    playerRef.current = new Replayer([], {
      root: side2Ref.current,
      liveMode: true,
    });
    playerRef.current.startLive();
  }, []);

  useEffect(() => {
    const animate = () => {
      let events = localStorage.getItem("EVENTS");
      events = events ? JSON.parse(events) : [];
      console.log(events);
      events.forEach((event) => playerRef.current.addEvent(event));

      localStorage.removeItem("EVENTS");

      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return <div className="App" ref={side2Ref}></div>;
}

export default App;
