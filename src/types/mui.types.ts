declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      white: string;
      black: string;
      gray: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      white?: string;
      black?: string;
      gray?: string;
    };
  }
}
