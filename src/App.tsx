import React from 'react';
import './App.css';
import './fontawesome';
import { LanguageProvider } from './contexts/LanguageContext';
import UnderConstruction from './components/UnderConstruction';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <UnderConstruction />
      </div>
    </LanguageProvider>
  );
}

export default App;
