import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 
import Footer from './Footer'; 

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
   <div className='home'>
   <div className="home-page">
   <header className="home-header">
     <h1>Welcome to Strike⚡</h1>
     <p><h3>"Wake up with Determination. Go to bed with Satisfaction"</h3></p>
     <button onClick={handleGetStarted} className="get-started-button">
       Get Started
     </button>
   </header>
   <section className="features">
     <h2>Features</h2>
     <div className="feature">
       <h3>Personalized Workouts</h3>
       <p>Create workout plans tailored to your fitness level and goals.</p>
     </div>
     <div className="feature">
       <h3>Progress Tracking</h3>
       <p>Track your workouts, progress, and see how you improve over time.</p>
     </div>
     <div className="feature">
       <h3>Trainer Guidance</h3>
       <p>Get tips and advice from fitness experts to maximize your results.</p>
     </div>
   </section>
 
 </div>
 <Footer /> 
   </div>
  );
};

export default Home;
