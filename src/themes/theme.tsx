import { createTheme } from '@material-ui/core/styles';
import CentraRegular from '../assets/fonts/Centra-No2-Regular.woff2';

const centra = {
  fontFamily: 'Centra No2',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    url(${CentraRegular}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A8080',
    },
    secondary: {
      main: '#F45D48',
    },
  },
  shadows: [
    "none",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
    "0px 3px 28px -10px rgba(112,144,176, 0.2)",
  ],
   typography: {
    fontFamily: [
      'Centra No2',
    ].join(','),
    body2: {
      fontWeight: 700,
    },
    
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [centra],
      },
    },
  },
});

export default theme;