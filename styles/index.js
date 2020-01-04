import css from 'styled-jsx/css';

// In an attempt to keep all configuration in one place, css variables
// are currently stored in config.yml. Move these variables into a
// variables file in this style/ directory if that is your preference.
import { config } from '../config';

// used in pages/about.js, pages/index.js
export const centeredPageStyles = css`
  .centered-container {
    height: 80vh;
    width: 98vw;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
