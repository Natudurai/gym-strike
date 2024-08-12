
import React from 'react';
import './About.css';
import TrainerCard from './TrainerCard';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://via.placeholder.com/150',
    bio: 'Experienced personal trainer specializing in strength training and nutrition.',
    specialty: 'Strength Training'
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://via.placeholder.com/150',
    bio: 'Certified yoga instructor with a passion for holistic wellness and mindfulness.',
    specialty: 'Yoga'
  }
];

const About = () => {
  return (
    <div className="about-container">
      
      <section className="intro-section">
        <h1>About Us</h1>
        <p>
          Welcome to Gym Trainer, where your fitness journey begins! We are committed to helping you achieve your health and fitness goals through personalized training, state-of-the-art facilities, and a supportive community.
        </p>
      </section>

      
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a welcoming and inclusive environment where individuals of all fitness levels can work towards their goals. We aim to inspire and empower our members through effective training programs, expert guidance, and continuous support.
        </p>
      </section>

      
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map(member => (
            <TrainerCard key={member.id} trainer={member} />
          ))}
        </div>
      </section>

      
      <section className="facilities-section">
        <h2>Our Facilities</h2>
        <div className="facilities-list">
          <div className="facility-item">
            <h3>State-of-the-Art Equipment</h3>
            <p>Work out with the latest machines and equipment to help you reach your fitness goals efficiently.</p>
          </div>
          <div className="facility-item">
            <h3>Group Classes</h3>
            <p>Join a variety of group classes including yoga, spinning, and HIIT for a dynamic workout experience.</p>
          </div>
          <div className="facility-item">
            <h3>Personal Training</h3>
            <p>Get one-on-one training sessions with our certified personal trainers for a customized fitness plan.</p>
          </div>
          <div className="facility-item">
            <h3>Wellness Programs</h3>
            <p>Participate in our wellness programs that offer nutrition counseling and mental health support.</p>
          </div>
        </div>
      </section>

      
      <section className="why-choose-us-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Expert Trainers: Our team of certified trainers is dedicated to your success.</li>
          <li>Comprehensive Facilities: Enjoy a full range of fitness equipment and amenities.</li>
          <li>Community Support: Join a supportive and motivating community of fitness enthusiasts.</li>
          <li>Flexible Membership Plans: Choose from a variety of membership options that suit your needs.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
