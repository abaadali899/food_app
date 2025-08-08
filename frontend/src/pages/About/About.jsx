import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Our Restaurant</h1>
        <p>Delighting taste buds since 2020</p>
      </section>

      <section className="about-content">
        <div className="about-card animate-fade-in">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, our restaurant was born from a passion for delicious, authentic food and a desire to bring people together. 
            What started as a small family-owned eatery has grown into a popular dining destination known for fresh ingredients, vibrant atmosphere, and heartfelt service.
          </p>
        </div>

        <div className="about-card animate-slide-in-left">
          <h2>Our Mission</h2>
          <p>
            To create memorable dining experiences by serving high-quality meals made with love and locally sourced ingredients. 
            We strive to provide exceptional service that feels like home.
          </p>
        </div>

        <div className="about-card animate-slide-in-right">
          <h2>Our Vision</h2>
          <p>
            To become the most loved restaurant in the city—where people come not just to eat, but to connect, celebrate, and relax. 
            We aim to constantly innovate while preserving our authentic culinary roots.
          </p>
        </div>

        <div className="about-team animate-fade-in">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="https://via.placeholder.com/120" alt="Chef" />
              <h4>Chef Ali Khan</h4>
              <p>Head Chef</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/120" alt="Manager" />
              <h4>Maria Sheikh</h4>
              <p>Restaurant Manager</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/120" alt="Owner" />
              <h4>Ahmed Zafar</h4>
              <p>Founder & Owner</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
