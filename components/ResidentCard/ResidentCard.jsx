import React from "react";
import "./ResidentCard.css";

const ResidentCard = ({ resident }) => {
  return (
    <div className="resident-card">
      <h4>{resident.name}</h4>
      <p>
        <strong>Height:</strong> {resident.height}
      </p>
      <p>
        <strong>Mass:</strong> {resident.mass}
      </p>
      <p>
        <strong>Gender:</strong> {resident.gender}
      </p>
    </div>
  );
};

export default ResidentCard;
