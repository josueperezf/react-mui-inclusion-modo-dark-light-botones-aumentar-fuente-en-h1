import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./components/Home";
import { useThemeContext } from "./theme/ThemeContextProvider";
import InclusionButtons from "./ui/components/InclusionButtons";

//* fuente del tema dark https://mui.com/material-ui/customization/dark-mode/
function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <InclusionButtons />
      <Home />
    </ThemeProvider>
  )
}

export default App
