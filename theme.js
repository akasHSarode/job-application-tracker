import { createTheme as createMaterialTheme } from '@material-ui/core/styles';
import { teal, pink } from '@material-ui/core/colors';


export default function createTheme(mode) {
  const font =  "'Nunito', sans-serif";

  // return a theme instance.
  return createMaterialTheme({
    typography: {
      fontFamily: font
    },
    
    palette: {
      // brightness
      mode: mode === 'dark' ? 'dark' : 'light',
      
      // colors
      primary: teal, 
      secondary: pink
    },
  });
}