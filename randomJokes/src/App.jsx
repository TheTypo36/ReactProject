import React, { useEffect, useState } from "react";
import JokeCard from "./components/JokeCard";
function App() {
  const [jokes, setJokes] = useState([]);
  const [limit, setLimit] = useState(7);
  const [category, setCategory] = useState("");
  const categoryOptions = ["science", "sport", "meme", "computer"];

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/public/randomjokes?limit=${limit}&query=${category}`
        );
        console.log("response", response);
        const data = await response.json();
        console.log("data", data.data.data);
        setJokes(data.data.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchJokes();
  }, [limit, category]);
  return (
    <div>
      {/* <form onSubmit={handleRefresh}> */}
      {jokes.map((joke) => (
        <JokeCard key={joke.id} joke={joke} />
      ))}
      <div>
        <input
          type="range"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
        <span>numOfJokes: {limit}</span>
      </div>
      <div>
        <span>Category:</span>
        <select onChange={(e) => setCategory(e.target.value)}>
          {categoryOptions.map((opt) => (
            <option value={opt} key={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* <button type="submit">Refresh</button> */}
      {/* </form> */}
    </div>
  );
}

export default App;
