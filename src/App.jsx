import "./App.css";

async function App() {
  const url =
    "https://mountain-api1.p.rapidapi.com/api/mountains?name=Mount%20Everest";
  const options = {
    method: "GET",
    headers: {
      //
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export default App;
