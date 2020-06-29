import React from "react";
import useClick from "./UseClick";

const UseClickApp = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  return (
    <div className="UseClickApp">
      <h1 ref={title}>UseClick</h1>
      <p>Click on the UseClick. </p>
      <hr />
    </div>
  );
};

export default UseClickApp;
