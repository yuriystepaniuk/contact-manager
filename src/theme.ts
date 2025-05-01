import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    custom: {
      white: "#FFFFFF",
      black: "#000000",
      gray: "#C7C7C7",
      scrollbarTrack: "#f1f1f1",
      scrollbarThumb: "#888",
      scrollbarThumbHover: "#757575",
    },
    background: {
      default: "#F5F5F5",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    primary: {
      main: "#FFFFFF",
      dark: "#E6E6E6",
    },
  },
  typography: {
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
    h1: { fontSize: "2rem", lineHeight: 1.2 },
    button: { textTransform: "none" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        "*::-webkit-scrollbar": {
          width: "8px",
        },
        "*::-webkit-scrollbar-track": {
          background: theme.palette.custom.scrollbarTrack,
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.custom.scrollbarThumb,
          borderRadius: "4px",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          background: theme.palette.custom.scrollbarThumbHover,
        },
        "*": {
          scrollbarWidth: "thin",
          scrollbarColor: `${theme.palette.custom.gray} ${theme.palette.custom.scrollbarTrack}`,
        },
      }),
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiOutlinedInput-root": {
            backgroundColor: theme.palette.custom.white,
            color: theme.palette.custom.black,

            "& fieldset": {
              borderColor: theme.palette.custom.gray,
            },
            "&:hover fieldset": {
              borderColor: theme.palette.primary.dark,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.custom.gray,
            },
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          "&.Mui-focused": {
            color: theme.palette.custom.black,
          },
        }),
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          cursor: "pointer",
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(1, 2),
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.secondary,
          border: `1px solid ${theme.palette.custom.gray}`,
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
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2),
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2),
        }),
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: 2,
      },
    },
  },
});
