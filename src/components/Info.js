import React from "react";

function Info() {
  return (
    <div className="info-container">
      <div className="main-info">
        <h1>Tony Moreno</h1>
        <p className="content job-title">Email & Mobile App Developer</p>
        <p className="content website-link">
          <a href="https://www.example.com" target="_blank" rel="noreferrer">
            https://www.tonymoreno.dev
          </a>
        </p>
      </div>
      <div className="buttons">
        <a
          className="btn"
          href="https://www.example.com"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fas fa-envelope" style={{ paddingRight: 9 }}></i>
          Email
        </a>
        <a
          className="btn2"
          href="https://www.example.com"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin" style={{ paddingRight: 9 }}></i>
          LinkedIn
        </a>
      </div>
      <div className="about-content">
        <div className="about-section">
          <h3>About</h3>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="interests-section">
          <h3>Interests</h3>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
