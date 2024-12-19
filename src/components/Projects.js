import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Face Glass Detection",
      description: " Developed a Deep learning model using Deep CNN to detect whether an individual is wearing glasses, achieving 99.8% accuracy. And also, created a user interface with Gradio to allow users to upload photos and receive real-time detection results. "
    },
    {
      title: "Plant Disease Detection",
      description: " Developed a machine learning model using image processing and machine learning algorithms that evaluates multiple models to identify the one with the highest accuracy for disease detection."
    },
    {
      title: "ATM Management System",
      description: "Developed an ATM management system in C that provides users with options for deposits, withdrawals, and transaction history.."
    },
    {
      title: "Speech Emotion Recognition",
      description: "In this project,I have Developed a deep learning model using LSTM (Long Short-Term Memory) to classify emotions based on audio data. The model was trained on labeled audio clips to detect emotions like happiness, sadness, and anger with accuracy of 99.8%. "
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <button className="arrow left-arrow" onClick={handlePrevClick}>◀</button>
        <div className="project-card">
          <h3 className="project-title">{projects[currentIndex].title}</h3>
          <p className="project-description">{projects[currentIndex].description}</p>
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>▶</button>
      </div>
    </section>
  );
}

export default Projects;
