import React from "react";
import useInput from "./UseInput";

const UseInputApp = () => {
  const maxLen = (value) => value.length < 10; // 글자 수 제한
  // !value.includes("@"); 특정 문자 제한
  const name = useInput("Mr.", maxLen);

  return (
    <div className="UseInputApp">
      <h1>UseInput</h1>
      <input placeholder="Name" {...name} />
      <hr />
    </div>
  );
};

export default UseInputApp;
