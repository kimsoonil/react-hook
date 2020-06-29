import React from "react";
import useBeforeLeave from "./UseBeforeLeave";

const UseBeforeLeaveApp = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="useBeforeLeaveApp">
      <h1>UseBeforeLeave</h1>

      <hr />
    </div>
  );
};

export default UseBeforeLeaveApp;
