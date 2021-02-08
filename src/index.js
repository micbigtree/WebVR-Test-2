import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import App from "./App"

function Overlay() {
  const [ready, set] = useState(false)
  return (
    <>
      <App />
      {!ready && (
        <div className="overlay">
          <div className="overlayText">
            ← Click the dot to start. Point and click to interact with the scene! ;)
            <br />
            <span style={{ marginLeft: 18 }}>Needs fullscreen to work!</span>
          </div>
        </div>
      )}
      <div className="dot" style={{ pointerEvents: ready ? "none" : "all" }} onClick={() => set(true)} />
    </>
  )
}

ReactDOM.render(<Overlay />, document.getElementById("root"))
