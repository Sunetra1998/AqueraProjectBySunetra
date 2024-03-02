import React, { useState, useEffect } from "react";
import ResidentCard from "../ResidentCard/ResidentCard";
import "./PlanetCard.css";

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const promises = planet.residents.map(async (residentUrl) => {
        const response = await fetch(residentUrl);
        const residentData = await response.json();
        return residentData;
      });
      const residentData = await Promise.all(promises);
      setResidents(residentData);
    };

    fetchResidents();
  }, [planet.residents]);

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>
        <strong>Climate:</strong> {planet.climate}
      </p>
      <p>
        <strong>Population:</strong> {planet.population}
      </p>
      <p>
        <strong>Terrain:</strong> {planet.terrain}
      </p>
      <h3>Residents:</h3>
      <div className="residents-list">
        {residents.map((resident, index) => (
          <ResidentCard key={index} resident={resident} />
        ))}
      </div>
    </div>
  );
};

export default PlanetCard;
