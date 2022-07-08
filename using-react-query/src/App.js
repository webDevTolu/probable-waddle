import { useQuery } from "react-query";

const getData = async () => {
  const response = await fetch(
    "https://teaminnovation-endpoint.herokuapp.com/eoi-list/"
  );

  return response.json();
};

function App() {
  const { isLoading, error, data } = useQuery("userData", getData);

  
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
