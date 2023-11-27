import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const getThemeVariables = () => {
    return theme === 'dark'
      ? {
          '--background': '#111827',
          '--text-color': '#f2f2f2',
          '--accent-color': '#00adb5',
        }
      : {
          '--background': '#f2f2f2',
          '--text-color': '#111827',
          '--accent-color': '#00adb5',
        };
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={getThemeVariables()}>{children}</div>
    </ThemeContext.Provider>
  );
};
