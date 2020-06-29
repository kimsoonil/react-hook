import React from "react";
import useFadeIn from "./UseFadeIn";

const UseFadeInApp = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="UseFadeInApp">
      <h1 {...fadeInH1} style={{ opacity: 0 }}>
        UseFadeIn
      </h1>
      <p {...fadeInP}>lorem ipsum lalalalal</p>
      <hr />
    </div>
  );
};

export default UseFadeInApp;
