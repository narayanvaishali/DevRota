import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  type: 'dark',
  primary: {
    light: '#d8cfb3',
    main: '#fff',
    dark: '#654c00',
  },
  secondary: {
    light: '#ff4081',
    main: '#f50057', 
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
  },
  divider: '#454e5e',
  background: {
    default: '#fff',
    paper: '#1a222f',
    secondary: '#353F50',
  },
};

const typography = {
  useNextVariants: true /* [1] */,
  fontFamily: 'Arial, sans-serif',
  h1: {
    fontWeight: 300,
    fontSize: '6rem',
    lineHeight: 1,
  },
  h2: {
    fontWeight: 300,
    fontSize: '3.75rem',
    lineHeight: 1,
  },
  h3: {
    fontWeight: 400,
    fontSize: '3rem',
    lineHeight: 1.04,
  },
  h4: {
    fontWeight: 400,
    fontSize: '2.125rem',
    lineHeight: 1.17,
  },
  h5: {
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: 1.33,
  },
  h6: {
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: 1.6,
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.75,
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.57,
  },
  body1: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  body2: {
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
  button: {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    textTransform: 'uppercase',
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66,
  },
  overline: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 2.66,
    textTransform: 'uppercase',
  },
};


export default createMuiTheme({ palette, typography });
