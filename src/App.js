import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import theme from './mui/theme';
import ASTIDashboard from './components/dashboard/ASTIDashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ASTIDashboard />
    </ThemeProvider>
  );
}

export default App;
