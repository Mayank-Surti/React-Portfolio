import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Mayank-Surti" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/mayank-surti-284967290/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:msurti225@gmail.com" target="_blank" rel="noreferrer"><MailIcon /></a>
        <p>msurti225@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;