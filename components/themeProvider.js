import { useContext, createContext, useState, useMemo } from "react";
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import createTheme from "../theme";


// context which will provide function to toggle app theme
const ColorModeContext = createContext({ toggleColorMode: () => {} });

// hook to make value of above context easily available
export function useColorModeContext() {
  return useContext(ColorModeContext);
}

export default function ThemeProvider({ children }) {
  // TODO: read system's preferred theme and apply that as default
  // default app theme
  const [mode, setMode] = useState('dark');

  // TODO: study useMemo in detail 
  // a simple toggleColorMode would suffice but official repo of material-ui
  // makes use of useMemo and it seems to have performance benefits
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  
  const theme = useMemo(() => createTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MaterialThemeProvider theme={theme}>
        <CssBaseline />
        { children }
      </MaterialThemeProvider>
    </ColorModeContext.Provider>
  );
}