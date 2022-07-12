import { createTheme } from "@material-ui/core/styles";

export default createTheme({
  typography: {
    fontFamily: '"PT Sans", Roboto, Helvetica, sans-serif',
  },
  palette: {
    white: "rgb(255,255,255)",
    secondary: {
      light: "rgb(220,220,220)",
      dark: "rgb(0,4,17)",
      main: "rgb(84, 87, 118)",
    },
    primary: {
      main: "rgb(29, 190, 180)",
      secondary: "rgb(156,63,1)",
      light: "rgb(47, 82, 20)",
    },
    text: {
      primary: "rgba(56, 59, 88, 1)",
      dark: "rgb(0,4,17)",
      hint: "rgba(56, 59, 88, 1)",
    },
  },

  success: "rgb(89,157,38)",
  warning: "rgb(255,160,0)",
  error: "rgb(200,63,1)",

  mixins: {
    textOverflow: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    textClamp: (lines) => ({
      display: "-webkit-box",
      "-webkit-line-clamp": lines,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
    }),
    noScroll: {
      "-webkit-overflow-scrolling": "touch",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
        width: "0 !important",
      },
    },
    cardShadow: {
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },
});
