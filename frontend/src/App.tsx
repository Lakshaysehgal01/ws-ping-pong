import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState<string>("");
  const socketRef = useRef<WebSocket | null>(null);
  const [serverMsg, setServerMsg] = useState<string[]>([]);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    socketRef.current = ws;
    ws.onerror = () => {
      console.log("error while connecting to websocket server ");
    };
    ws.close = () => {
      console.log("Connection closed");
    };
    ws.onmessage = (e) => {
      setServerMsg((prev) => [...prev, e.data]);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    socketRef.current?.send(msg);
  };
  return (
    <div
      style={{
        maxWidth: 500,
        margin: "2rem auto",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h1>Ping Pong WebSocket Client</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={msg}
          placeholder="Enter message"
          onChange={(e) => setMsg(e.target.value)}
          style={{ padding: "0.5rem", width: "70%" }}
        />
        <button
          type="submit"
          style={{ padding: "0.5rem 1rem", marginLeft: "1rem" }}
        >
          Send
        </button>
      </form>

      <div style={{ marginTop: "2rem", textAlign: "left" }}>
        <h3>Server Messages:</h3>
        <ul>
          {serverMsg.map((msg, idx) => (
            <li key={idx} style={{ marginBottom: "0.5rem" }}>
              {msg}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
