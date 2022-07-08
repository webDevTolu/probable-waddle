import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
    // can also use fetch() instead of axios
    await axios("https://teaminnovation-endpoint.herokuapp.com/eoi-list/")
      .then((res) => {
        setData(res.data);
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
    }

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
