import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://teaminnovation-endpoint.herokuapp.com/eoi-list/")
      // checks if the response is ok ✔
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // else show the response
        throw res;
      })
      // set the res.json to data
      .then((data) => {
        setData(data);
      })
      // if there's an error, set the error to the error
      .catch((error) => {
        console.log("Error fetching Data: ", error);
        setError(error);
      })
      // after the fetch, set loading to false
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.statusText}</div>;
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
