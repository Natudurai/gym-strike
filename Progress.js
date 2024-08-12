import React, { useState } from 'react';
import axios from 'axios';
import './Progress.css';

const Progress = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [initialWeight, setInitialWeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [initialMeasurements, setInitialMeasurements] = useState('');
  const [currentMeasurements, setCurrentMeasurements] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiMessage, setBmiMessage] = useState('');
  const [showResults, setShowResults] = useState(false);

  const calculateWeightLoss = () => {
    if (!initialWeight || !currentWeight) return 0;
    return initialWeight - currentWeight;
  };

  const calculateMeasurementChange = () => {
    if (!initialMeasurements || !currentMeasurements) return 0;
    return initialMeasurements - currentMeasurements;
  };

  const calculateBmi = () => {
    if (!height || !currentWeight) return;
    const heightInMeters = height / 100;
    const bmiValue = (currentWeight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let message = '';
    if (bmiValue < 18.5) {
      message = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      message = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      message = 'Overweight';
    } else {
      message = 'Obesity';
    }
    setBmiMessage(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    calculateBmi();
    setShowResults(true);

    // Prepare data for backend
    const progressData = {
      username,
      email,
      initialWeight,
      currentWeight,
      initialMeasurements,
      currentMeasurements,
      height,
      bmi,
      bmiMessage,
    };

    try {
      await axios.post("http://localhost:8080/api/progress", progressData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (error) {
      console.error("Error saving progress data:", error);
    }
  };

  return (
    <div className="progress-page">
      <h2>Track Your Progress</h2>
      <form className="progress-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label><h3>Username</h3></label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label><h3>Email ID</h3></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label><h3>Initial Weight (kg)</h3></label>
          <input
            type="number"
            value={initialWeight}
            onChange={(e) => setInitialWeight(parseFloat(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label><h3>Current Weight (kg)</h3></label>
          <input
            type="number"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(parseFloat(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label><h3>Initial Measurements (cm)</h3></label>
          <input
            type="number"
            value={initialMeasurements}
            onChange={(e) => setInitialMeasurements(parseFloat(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label><h3>Current Measurements (cm)</h3></label>
          <input
            type="number"
            value={currentMeasurements}
            onChange={(e) => setCurrentMeasurements(parseFloat(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label><h3>Height (cm)</h3></label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            required
          />
        </div>
        <button type="submit">Calculate Progress & BMI</button>
      </form>
      {showResults && (
        <div className="progress-results">
          <h3>Results:</h3>
          <p>Weight Loss: {calculateWeightLoss()} kg</p>
          <p>Measurement Change: {calculateMeasurementChange()} cm</p>
          {bmi && (
            <div>
              <p>BMI: {bmi}</p>
              <p>Status: {bmiMessage}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Progress;
