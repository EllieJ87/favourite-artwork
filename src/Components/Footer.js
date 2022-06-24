import React from "react";

import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="container-fluid footer">
      <a href='https://www.linkedin.com/in/ellie-judge-45b00689/' target='_blank '>
        <FaLinkedin className="social-icons" />
      </a>
      <a href='mailto:ellie_judge@hotmail.co.uk?&subject=Request for information &body=Welcome!, What would you like to chat about?' target='_blank ' aria-hidden='true'>
        <MdEmail className="social-icons" />
      </a>
      <a href='https://github.com/EllieJ87' target='_blank '>
        <FaGithub className="social-icons" />
      </a>
      <a href='https://discord.com/channels/@me' target='_blank '>
        <FaDiscord className="social-icons" />
      </a>
    </footer>
  )
}