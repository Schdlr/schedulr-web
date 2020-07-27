import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Authentication} from './components/screens';
import theme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Authentication />
    </ThemeProvider>
  );
}

export default App;
