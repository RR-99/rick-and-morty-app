import React, { useEffect, useState } from "react";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando personajes...</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {characters.map((char) => (
        <div
          key={char.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            width: "200px",
            borderRadius: "8px",
            textAlign: "center",
            backgroundColor: "#f4f4f4",
          }}
        >
          <img
            src={char.image}
            alt={char.name}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h3>{char.name}</h3>
          <p>{char.status} - {char.species}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
