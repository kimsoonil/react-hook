import React from "react";
import useScroll from "./UseScroll";

const UseScrollApp = () => {
  const { y } = useScroll();
  return (
    <div className="UseScrollApp">
      <div>
        <h1
          style={{
            position: "fixed",
            textAlign: "center",
            right: "1%",
            top: "50%",
            color: y > 100 ? "red" : "blue",
          }}
        >
          Use
          <br />
          Scroll
        </h1>
      </div>
    </div>
  );
};

export default UseScrollApp;
