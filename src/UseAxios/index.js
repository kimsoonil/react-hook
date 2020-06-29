import React from "react";
import useAxios from "./UseAxios";

const UseAxiosApp = () => {
  const { loading, error, data } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  );
  return (
    <div className="UseAxiosApp">
      <h1>UseAxios</h1>

      <hr />
    </div>
  );
};

export default UseAxiosApp;
