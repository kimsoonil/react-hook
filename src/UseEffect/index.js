import React, { useState, useEffect } from "react";

const UseEffectApp = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [0]);

  return (
    <div className="UseEffectApp">
      <h1>UseEffect</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
      <hr />
    </div>
  );
};

export default UseEffectApp;
