import React, { createContext, useState, useContext } from 'react';
import Moreoptions from '../components/Moreoptions';

// Create a context
const ThemeContext = createContext();

// Custom hook to consume the context
export const useTheme = () => useContext(ThemeContext);

// Context provider component
export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  );
};
