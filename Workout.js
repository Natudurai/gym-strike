
import React, { useState } from 'react';
import Timer from './Timer'; 
import './Workout.css';

const workouts = {
  Monday: [
    { exercise: 'Push-ups', sets: 3, reps: 15, rest: '60s' },
    { exercise: 'Bench Press', sets: 3, reps: 12, rest: '90s' },
  ],
  Tuesday: [
    { exercise: 'Pull-ups', sets: 3, reps: 10, rest: '60s' },
    { exercise: 'Lat Pulldown', sets: 3, reps: 12, rest: '90s' },
  ],
  Wednesday: [
    { exercise: 'Squats', sets: 4, reps: 15, rest: '90s' },
    { exercise: 'Leg Press', sets: 3, reps: 12, rest: '90s' },
  ],
  Thursday: [
    { exercise: 'Shoulder Press', sets: 3, reps: 12, rest: '60s' },
    { exercise: 'Lateral Raises', sets: 3, reps: 15, rest: '60s' },
  ],
  Friday: [
    { exercise: 'Deadlifts', sets: 4, reps: 10, rest: '120s' },
    { exercise: 'Hamstring Curls', sets: 3, reps: 12, rest: '90s' },
  ],
  Saturday: [
    { exercise: 'Bicep Curls', sets: 3, reps: 15, rest: '60s' },
    { exercise: 'Tricep Dips', sets: 3, reps: 12, rest: '60s' },
  ],
  Sunday: [
    { exercise: 'Rest Day', sets: '', reps: '', rest: '' },
  ],
};

const Workout = () => {
  const [selectedRest, setSelectedRest] = useState(null);

  const handleRestClick = (restTime) => {
    if (restTime === '') return;
    const seconds = parseInt(restTime, 10);
    setSelectedRest(seconds);
  };

  return (
    <div className="workout-page">
      <h2>Weekly Workout Plan</h2>
      <div className="workout-schedule">
        {Object.keys(workouts).map((day) => (
          <div key={day} className="workout-day">
            <h3>{day}</h3>
            <ul>
              {workouts[day].map((workout, index) => (
                <li key={index}>
                  <strong>{workout.exercise}</strong>: {workout.sets} sets of {workout.reps} reps (Rest: {workout.rest})
                  <button onClick={() => handleRestClick(workout.rest)} disabled={workout.rest === ''}>
                    Start Rest Timer🕚
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {selectedRest !== null && (
        <Timer initialTime={selectedRest} onFinish={() => alert('Rest time is over!')} />
      )}
    </div>
  );
};

export default Workout;
