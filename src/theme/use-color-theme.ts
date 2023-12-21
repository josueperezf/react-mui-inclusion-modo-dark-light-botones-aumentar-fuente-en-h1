import React from "react";
import { createTheme, PaletteMode } from "@mui/material";

import
// theme,
{ getDesignTokens } from "./theme";
const minDecrement = -2;
const maxIncrement = 2;

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const [fontSize , setFontSize] = React.useState(0);


  const handleIncrement = () => {
      setFontSize((prevFontSize) => Math.min(prevFontSize + 1, maxIncrement));
  }
  const handleDecrement = () => {
    setFontSize((prevFontSize) => Math.max(minDecrement, prevFontSize - 1));
  }

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  // const modifiedTheme = React.useMemo(
  //   () =>
  //     createTheme({
  //       ...theme,
  //       palette: {
  //         ...theme.palette,
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );

  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode, fontSize)),
    [mode, fontSize]
  );

  return {
    theme: modifiedTheme,
    mode,
    fontSize,
    toggleColorMode,
    handleIncrement,
    handleDecrement,
  };
};