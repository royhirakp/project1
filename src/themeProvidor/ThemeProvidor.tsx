"use client";

import { Box, CssBaseline, Paper } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
interface ContainerProps {
  children: ReactNode;
}

const ThemeProvidor: React.FC<ContainerProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#6c826f" : "#088d45",
        light: !darkMode ? "#e69b9b24" : "#0a1b18f5",
        dark: "#2c365f",
      },
      secondary: {
        main: darkMode ? "#eaf4e4" : "#13492c",
        light: darkMode ? "#676464" : "#dcd5d5",
        dark: darkMode ? "#c8e0f5" : "#f0f8ff",
      },

      background: {
        default: darkMode ? "#0b293a" : "#e6f0fa",
        // #e6f0fa
        paper: darkMode ? "#2a2828" : "#d9d4d4 ",
      },
    },

    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: darkMode ? "#6c826f" : "#088d45",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              // border: "11px solid",
              bagroundColor: "#2c365f",
            },
            textTransform: "none",
            fontSize: "10px",
            "@media (min-width:279px)": {
              fontSize: "10px", // Adjust font size for screens with a minimum width of 600px (sm)
            },
            "@media (min-width:600px)": {
              fontSize: "12px", // Adjust font size for screens with a minimum width of 600px (sm)
            },
            "@media (min-width:960px)": {
              fontSize: "13px", // Adjust font size for screens with a minimum width of 960px (md)
            },
            "@media (min-width:1280px)": {
              fontSize: "14px", // Adjust font size for screens with a minimum width of 1280px (lg)
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: darkMode ? "#ebecf3" : "#2a2a2b",
          },
        },
      },
    },
  });
  return (
    <Box>
      <ThemeProvider theme={theme}>
        {/* <Switch checked={darkMode} onChange={toggleDarkMode} color="primary" /> */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Box>
  );
};

export default ThemeProvidor;
