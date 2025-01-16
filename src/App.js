// App.js
import React from 'react';
import { ThemeProvider } from './Components/ThemeContext'; // Import the Theme Provider
import Header from './Components/Header';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Professional from './Components/Professional';
import Contact from './Components/Contact';
const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Professional />
      <Contact />
      {/* Other components */}
    </ThemeProvider>
  );
};

export default App;
