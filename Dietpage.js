// DietPage.jsx

import React, { useState } from 'react';
import './Dietpage.css';

const DietPage = () => {
  const [diets, setDiets] = useState([
    {
      id: 1,
      name: 'Keto Diet',
      description: 'A low-carb, high-fat diet that helps burn fat more effectively. Known for reducing body weight and improving mental focus.',
      goals: [
        'Achieve ketosis',
        'Reduce body fat',
        'Improve energy levels'
      ],
      benefits: [
        'Promotes weight loss',
        'Improves mental clarity',
        'Reduces blood sugar levels'
      ],
      suggestedFoods: [
        'Avocado',
        'Nuts and seeds',
        'Olive oil',
        'Fatty fish'
      ],
      nutritionalInfo: [
        'Carbs: 5% of daily intake',
        'Fats: 75% of daily intake',
        'Proteins: 20% of daily intake'
      ],
      mealPlan: [
        'Breakfast: Scrambled eggs with avocado',
        'Lunch: Grilled chicken salad',
        'Dinner: Baked salmon with broccoli',
      ],
      reviews: [
        '“A great diet for weight loss!” - Alex',
        '“Helped me focus better during work.” - Jamie'
      ],
    },
    {
      id: 2,
      name: 'Mediterranean Diet',
      description: 'Focuses on whole grains, fruits, vegetables, and healthy fats. Associated with a reduced risk of heart disease and improved longevity.',
      goals: [
        'Improve cardiovascular health',
        'Increase longevity',
        'Support healthy digestion'
      ],
      benefits: [
        'Supports heart health',
        'Improves digestion',
        'May help with weight management'
      ],
      suggestedFoods: [
        'Olive oil',
        'Nuts and seeds',
        'Whole grains',
        'Lean proteins'
      ],
      nutritionalInfo: [
        'Carbs: 45% of daily intake',
        'Fats: 35% of daily intake',
        'Proteins: 20% of daily intake'
      ],
      mealPlan: [
        'Breakfast: Greek yogurt with honey and nuts',
        'Lunch: Quinoa salad with vegetables',
        'Dinner: Stuffed bell peppers with lean ground turkey',
      ],
      reviews: [
        '“Delicious and heart-healthy meals!” - Morgan',
        '“My favorite diet for overall wellness.” - Taylor'
      ],
    },
    {
      id: 3,
      name: 'Balanced Diet',
      description: 'A well-rounded diet that includes a variety of foods in the right proportions to maintain health and energy levels.',
      goals: [
        'Maintain overall health',
        'Provide balanced nutrition',
        'Support energy levels'
      ],
      benefits: [
        'Promotes overall well-being',
        'Provides essential nutrients',
        'Supports energy and stamina'
      ],
      suggestedFoods: [
        'Fruits and vegetables',
        'Lean meats',
        'Whole grains',
        'Low-fat dairy'
      ],
      nutritionalInfo: [
        'Carbs: 50% of daily intake',
        'Fats: 25% of daily intake',
        'Proteins: 25% of daily intake'
      ],
      mealPlan: [
        'Breakfast: Oatmeal with fresh fruit',
        'Lunch: Turkey sandwich with whole grain bread',
        'Dinner: Grilled chicken with quinoa and steamed vegetables',
      ],
      reviews: [
        '“Perfect for maintaining a healthy lifestyle!” - Chris',
        '“I feel great and energized every day.” - Pat'
      ],
    },
    {
      id: 4,
      name: 'Paleo Diet',
      description: 'A diet that mimics the eating patterns of our ancient ancestors by focusing on whole, unprocessed foods.',
      goals: [
        'Reduce inflammation',
        'Improve digestion',
        'Increase energy levels'
      ],
      benefits: [
        'Reduces inflammation',
        'Improves digestive health',
        'Supports weight management'
      ],
      suggestedFoods: [
        'Lean meats',
        'Vegetables',
        'Fruits',
        'Nuts and seeds'
      ],
      nutritionalInfo: [
        'Carbs: 40% of daily intake',
        'Fats: 30% of daily intake',
        'Proteins: 30% of daily intake'
      ],
      mealPlan: [
        'Breakfast: Smoothie with spinach, banana, and almond milk',
        'Lunch: Grilled steak with mixed greens',
        'Dinner: Baked chicken with roasted sweet potatoes',
      ],
      reviews: [
        '“A fantastic way to eat clean and feel great!” - Sam',
        '“My digestion has never been better.” - Lee'
      ],
    },
    // Add more diet plans as needed
  ]);

  return (
    <section className="diet-page">
      <header className="diet-header">
        <h1>Diet Plans</h1>
        <p>Explore our detailed diet plans designed to help you achieve your fitness goals. Each plan includes a comprehensive meal guide, benefits, and nutritional information.</p>
      </header>
      
      <div className="diet-list">
        {diets.map(diet => (
          <div key={diet.id} className="diet-card">
            <h2>{diet.name}</h2>
            <p className="diet-description">{diet.description}</p>
            <div className="diet-goals">
              <h3>Diet Goals</h3>
              <ul>
                {diet.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>
            <div className="diet-benefits">
              <h3>Benefits</h3>
              <ul>
                {diet.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="diet-suggested-foods">
              <h3>Suggested Foods</h3>
              <ul>
                {diet.suggestedFoods.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </ul>
            </div>
            <div className="diet-nutritional-info">
              <h3>Nutritional Information</h3>
              <ul>
                {diet.nutritionalInfo.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
            <div className="meal-plan">
              <h3>Meal Plan</h3>
              <ul>
                {diet.mealPlan.map((meal, index) => (
                  <li key={index}>{meal}</li>
                ))}
              </ul>
            </div>
            <div className="diet-reviews">
              <h3>User Reviews</h3>
              <ul>
                {diet.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DietPage;
