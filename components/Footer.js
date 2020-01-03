import React from 'react';
import { config } from '../config';

function Footer() {
  return <div className="footer">{config.author}</div>;
}

export default Footer;
