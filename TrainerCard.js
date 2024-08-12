

import React from 'react';
import './TrainerCard.css';

const TrainerCard = ({ trainer }) => {
  return (
    <div className="trainer-card">
      
      <div className="trainer-card-content">
        <h3>{trainer.name}</h3>
        <p><strong>Specialty:</strong> {trainer.specialty}</p>
        <p>{trainer.bio}</p>
        <p><strong>Contact:</strong> {trainer.contact}</p>
        <p><strong>Certifications:</strong> {trainer.certifications.join(', ')}</p>
       
        <button>Contact Trainer</button>
      </div>
    </div>
  );
};

export default TrainerCard;
