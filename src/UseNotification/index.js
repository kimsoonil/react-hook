import React from "react";
import useNotification from "./UseNotification";

const UseNotificationApp = () => {
  const triggerNotif = useNotification("Can I stell your kimchi", {
    body: "I love kimchi dont you",
  });
  return (
    <div className="UseNotificationApp">
      <h1>UseNotification</h1>
      <button onClick={triggerNotif}>click</button>
    </div>
  );
};

export default UseNotificationApp;
