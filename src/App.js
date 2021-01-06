import React, { useState } from 'react';
import "./App.css"
import axios from 'axios'

function App(){
  const [characters, setCharacters ] =  useState(null);

  const apiURL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  
  const fetchData = async () => {
    const response = await axios.get(apiURL)
    
    setCharacters(response.data)
  }
  
  return (
    <div className="App">
      <h1> Superheros </h1>
      <h2>Fetch a list from an API and Display it</h2>

    {/* // Fetch Data */}
    <div>
      <button className="fetch-button" onClick={fetchData}>
        Fetch Data
      </button>
    </div>

    <div className="characters">
      {characters &&
        characters.map((character, index) => {
          
        return (
          <div className="character" key={index}>
          <h3>Character {index + 1}</h3>
          <h2>{character.name}</h2>

          <div className="details">
            <p> {character.slug} </p>
            <p> {character.work.occupation} </p>
            <p> <img src={character.images.sm} alt="Movie Poster"/> </p>

          </div>
        </div>
        )
        })}
    </div>

    </div>
  )
}
 
export default App;