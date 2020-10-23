import React from 'react';

const Footer = props => {
  return (
    <ul className="footer-container">
      <li>Developed by Tae Ha</li>
      <li><a href="https://github.com/taeinha/pnp_tasks_taeha" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github-square"></i></a></li>
      <li><a href="https://taeinha.com/" target="_blank" rel="noopener noreferrer" ><i className="fas fa-suitcase"></i></a></li>
      <li><a href="https://angel.co/tae-in-ha" target="_blank" rel="noopener noreferrer" ><i className="fab fa-angellist"></i></a></li>
      <li><a href="https://www.linkedin.com/in/tae-in-ha/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-linkedin"></i></a></li>
    </ul>
  )
};

export default Footer;