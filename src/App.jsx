// React
import { useState } from "react";

// MUI
import CssBaseline from '@mui/material/CssBaseline';
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';


// React-Router
import { Outlet, Routes, Route } from 'react-router-dom';

// Components
import Sidebar from "./components/Sidebar";
import Notebook from "./components/Notebook";
import Workbook from "./components/Workbook";

function App() {
  const [mode, setMode] = useState("light");

  const jgTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#793fb5',
      },
      secondary: {
        main: '#e8e522',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 740,
        md: 900,
        lg: 1200,
        xl: 1536,
      }
    }
  });

  return (
    <ThemeProvider theme={jgTheme}>
      <CssBaseline />
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Grid2 container spacing={2}>
          <Grid2 xs={3}>
            <Sidebar setMode={setMode} mode={mode} />
          </Grid2>
          <Grid2 xs={9}>
            <Outlet />
            <Routes>
              <Route path="/" element={<Workbook />} />
              <Route path="/note" element={<Notebook />} />
            </Routes>
          </Grid2>
        </Grid2>
      </Box>
    </ThemeProvider>
  );
}

export default App;
