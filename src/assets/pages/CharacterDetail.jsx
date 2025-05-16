import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching character:', error);
        setLoading(false);
      });
  }, [id]);
  
  if (loading) return <p>Cargando personaje...</p>;
  if (!character) return <p>No se encontró el personaje.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{character.name}</h2>
      <img
        src={character.image} 
        alt={character.name}
        style={{ width: '200px', borderRadius: '8px' }}
      />
      <ul>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>Gender: {character.gender}</li>
        <li>Origin: {character.origin?.name}</li>
        <li>Location actual: {character.location?.name}</li>
      </ul>
    </div>
  );
}

export default CharacterDetail;
