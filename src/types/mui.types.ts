import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      white: string;
      black: string;
      gray: string;
      scrollbarTrack: string;
      scrollbarThumb: string;
      scrollbarThumbHover: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      white?: string;
      black?: string;
      gray?: string;
      scrollbarTrack?: string;
      scrollbarThumb?: string;
      scrollbarThumbHover?: string;
    };
  }
}
