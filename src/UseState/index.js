import React, { useState } from "react";

const UsestateApp = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="UsestateApp">
      <h1>Usestate </h1>
      <h2>{item}</h2>
      <button onClick={incrementItem}>incrementItem</button>
      <button onClick={decrementItem}>decrementItem</button>
      <hr />
    </div>
  );
};

export default UsestateApp;
