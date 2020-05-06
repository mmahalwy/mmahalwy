import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import { config } from '../config';

// Options are, of course, optional, these are the default options
export const options = {
  black: config.css.black,
  fontFamilyBase:
    '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFamilyMonospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSizeBase: '1rem',
  fontWeightBase: 400,
  lineHeightBase: 1.5,
  headingsMarginBottom: '0.5rem',
  paragraphMarginBottom: '1rem',
  labelMarginBottom: '0.5rem',
  dtFontWeight: 700,
  linkColor: config.css.black,
  linkDecoration: 'underline',
  linkHoverColor: config.css.black,
  linkHoverDecoration: 'underline',
  tableCellPadding: '0.75rem',
  textMuted: '#6c757d',
  bodyColor: config.css.textColor,
  bodyBg: config.css.backgroundColor,
};

const rebootCss = reboot(options);

const GlobalStyles = createGlobalStyle`
  ${rebootCss}
  /* other styles */
`;

export default GlobalStyles;
