import React from "react";
import useTitle from "./UseTitle";

const UseTitleApp = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("home"), 5000);
  return (
    <div className="UseTitleApp">
      <h1>UseTitle</h1>
      <p>Look at the html title. will be changed.</p>
      <hr />
    </div>
  );
};

export default UseTitleApp;
