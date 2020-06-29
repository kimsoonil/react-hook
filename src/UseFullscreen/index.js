import React from "react";

import useFullscreen from "./UseFullscreen";

const UseFullscreenApp = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div className="UseFullscreenApp">
      <h1>UseFullscreen</h1>
      <div ref={element}>
        <img src="https://www.filepicker.io/api/file/Hfn2brfS1jwMefqbZrOQ"></img>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
      <hr />
    </div>
  );
};

export default UseFullscreenApp;
