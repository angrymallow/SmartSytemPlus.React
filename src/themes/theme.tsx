import { createTheme } from "@material-ui/core/styles";
import CentraRegular from "../assets/fonts/Centra-No2-Regular.woff2";
import { colors } from "./variables";

const centra = {
  fontFamily: "Centra No2",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
    url(${CentraRegular}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
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
    fontFamily: ["Centra No2"].join(","),
    body2: {
      fontWeight: 700,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [centra],
      },
    },
    MuiMenuItem: {
      root: {
        "&:hover": {
          backgroundColor: colors.primaryLight,
          color: colors.primary,
        },
      },
    },
    MuiAvatar: {
      root: {
        backgroundColor: colors.primary,
      },
      colorDefault: {
        backgroundColor: colors.primaryLight,
      },
    },
    MuiStepIcon: {
      root: {
        "&.MuiStepIcon-active, &.MuiStepIcon-completed": {
          color: colors.secondary!,
        },
      },
    },
    MuiButton: {
      root: {
        letterSpacing: "0.5px",
        padding: "6px 30px",
      },
      label: {
        textTransform: "none",
        fontWeight: 500,
      },
    },
    MuiInputLabel: {
      root: {
        // fontWeight: 700,
        color: colors.primary,
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: colors.black5,
      },
    },
    MuiTypography: {
      caption: {
        color: colors.black54,
      },
    },
    MuiTableHead: {
      root: {
        backgroundColor: colors.black5,
      },
    },
    MuiTableCell: {
      root: {
        "&.MuiTableCell-head": {
          fontWeight: 700,
        }
      }
    },
  MuiInputBase: {
      root: {
        backgroundColor: colors.white,
        "&.Mui-Focused": {
          backgroundColor: colors.white,
        }
      },
    },
  },
});

export default theme;
