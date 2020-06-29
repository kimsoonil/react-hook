import React from "react";
import useNetwork from "./UseNetwork";

const UseNetworkApp = () => {
  const handleNetworkChange = (online) =>
    console.log(onLine ? "We just went Online" : "We just went offline");
  const onLine = useNetwork();
  return (
    <div className="UseNetworkApp">
      <h1>UseNetwork</h1>
      <h2>{onLine ? "Online" : "offline"}</h2>
      <hr />
    </div>
  );
};

export default UseNetworkApp;
