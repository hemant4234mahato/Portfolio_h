import React from 'react';
import Navigation from './components/navigation/Navigation';
import Home from './components/Home/Home';
import Summary from './components/Summary/Summary';
import Languages from './components/Languages/Languages';
import Process from './components/Process/Process';
import Project from './components/Projects/Projects';
import Career from './components/Career/Career';
import About from './components/About/About';

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Home />
      <Summary />
      <Languages />
      <Project />
      <Career />
      <About />
      <Process />
    </div>
  );
}

export default App;
