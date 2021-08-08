import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useTheme } from '@emotion/react';
import { useColorModeContext } from '../components/themeProvider';


export default function Home() {
  const theme = useTheme();
  const darkTheme = theme.palette.mode === 'dark';
  const colorMode = useColorModeContext();

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Application Tracker
          </Typography>

          <Button 
            color="inherit"
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
          > 
            job
          </Button>
          <Box mr={2} />

          <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box 
        flexGrow={1} 
        display="flex"
        // only enable on dark mode
        borderTop={darkTheme ? 1 : 0} 
        borderColor="grey.400"
      >
        <Box p={2} borderRight={1} borderColor="grey.400" minWidth="400px">
          Job category One
        </Box>

        <Box p={2} borderRight={1} borderColor="grey.400" minWidth="400px">
          Job category Two
        </Box>
      </Box>
    </Box>
  )
}
