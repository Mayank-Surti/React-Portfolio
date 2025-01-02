import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Mayank-Surti" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/mayank-surti-284967290/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="mailto:msurti225@gmail.com" target="_blank" rel="noreferrer"><MailIcon /></a>
          </div>
          <h1>Mayank Surti</h1>
          <p>Computer Science student at University of Connecticut</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Mayank-Surti" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/mayank-surti-284967290/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;