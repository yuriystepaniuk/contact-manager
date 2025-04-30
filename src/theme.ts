import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    custom: {
      white: "#FFFFFF",
      black: "#000000",
    },
    background: {
      default: "#F5F5F5",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    primary: {
      main: "#646cff",
      dark: "#535bf2",
    },
  },
  typography: {
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
    h1: { fontSize: "2rem", lineHeight: 1.2 },
    button: { textTransform: "none" },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiOutlinedInput-root": {
            backgroundColor: theme.palette.custom.white,
            "& fieldset": {
              borderColor: theme.palette.primary.main,
            },
            "&:hover fieldset": {
              borderColor: theme.palette.primary.dark,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.dark,
            },
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "medium",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(1, 2),
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.custom.white,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.custom.white,
        }),
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
          },
        }),
      },
    },
  },
});
