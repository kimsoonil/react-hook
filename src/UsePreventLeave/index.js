import React from "react";
import usePreventLeave from "./UsePreventLeave";

const UsePreventLeaveApp = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="UsePreventLeaveApp">
      <h1>UsePreventLeave</h1>
      <button onClick={enablePrevent}>enablePrevent</button>
      <button onClick={disablePrevent}>disablePrevent</button>
      <hr />
    </div>
  );
};

export default UsePreventLeaveApp;
