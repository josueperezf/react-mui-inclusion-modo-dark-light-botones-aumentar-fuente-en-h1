import { createTheme, Theme } from "@mui/material";
import { createContext, FC, PropsWithChildren, useContext } from "react";
import { useColorTheme } from "./use-color-theme";

type ThemeContextType = {
  mode: string;
  theme: Theme;
  fontSize: number;
  toggleColorMode: () => void;
  handleDecrement: () => void;
  handleIncrement: () => void
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  fontSize: 0,
  theme: createTheme(),
  toggleColorMode: () => {},
  handleDecrement: () => {},
  handleIncrement: () => {},
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};