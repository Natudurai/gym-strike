

import React from 'react';
import TrainerCard from './TrainerCard';
import './Trainers.css';


const trainers = [
  {
    id: 1,
    name: 'Jegan',
    bio: 'National body building champion',
    specialty: 'Strength Training',
    contact: 'jegan@gmail.com',
    image: 'path/to/john_doe_image.jpg',
    certifications: ['Certified Strength Coach', 'Nutrition Specialist'],
    socialMedia: {
      facebook: 'https://facebook.com/john.doe',
      instagram: 'https://instagram.com/john.doe'
    }
  },
  {
    id: 2,
    name: 'Vicky',
    bio: 'Certified transformation trainer Trained top celebrities.',
    specialty: 'Fitness',
    contact: 'vicky@gmail.com.com',
    image: 'path/to/jane_smith_image.jpg',
    certifications: ['Certified Instructor', 'Diet Coach'],
    socialMedia: {
      facebook: 'https://facebook.com/jane.smith',
      instagram: 'https://instagram.com/jane.smith'
    }
  },
  {
    id: 3,
    name: 'Madan',
    bio: 'Nationals 100m champion .',
    specialty: 'Athlete Training',
    contact: 'madan@gmail.com.com',
    image: 'path/to/mark_johnson_image.jpg',
    certifications: ['Certified Endurance Coach', '  Athlete Specialist'],
    socialMedia: {
      facebook: 'https://facebook.com/mark.johnson',
      instagram: 'https://instagram.com/mark.johnson'
    }
  }
];

const Trainers = () => {
  return (
    <section className="trainers-container">
      <h2>Meet Our Expert Trainers⚡</h2>
      <p><h3>Our trainers are highly qualified and dedicated to helping you achieve your fitness goals. Learn more about them below!</h3></p>
      <div className="trainers-grid">
        {trainers.map(trainer => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </section>
  );
};

export default Trainers;
