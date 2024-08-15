import React from "react";

function JokeCard({ joke }) {
  console.log(joke);
  return (
    <div>
      <h4>{joke.categories}</h4>
      <p>{joke.content}</p>
    </div>
  );
}

export default JokeCard;
