import React from "react";
import useFetch from "react-fetch-hook";

function App() {
  // has to be isLoading, not loading
  const { isLoading, error, data } = useFetch(
    "https://teaminnovation-endpoint.herokuapp.com/eoi-list/"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="">
      {data.map((dataItem) => (
        <p key={dataItem.id}>{dataItem.fullname}</p>
      ))}
    </div>
  );
}

export default App;
