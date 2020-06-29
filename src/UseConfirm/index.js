import React from "react";
import useConfirm from "./UseConfirm";

const UseConfirmApp = () => {
  const deleteWorld = () => console.log("Deleting the word");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="UseTabsApp">
      <h1>UseConfirm</h1>
      <button onClick={confirmDelete}> Delete the world</button>
      <hr />
    </div>
  );
};

export default UseConfirmApp;
