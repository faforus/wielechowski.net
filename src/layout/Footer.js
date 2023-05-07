import React from 'react';
import classes from './Footer.module.css';
import Links from '../components/Links';

const Footer = () => {
  return (
    <footer>
      <Links />
      <p className={classes.copyright}>© 2023 Filip Wielechowski Fotografia</p>
    </footer>
  );
};

export default Footer;
