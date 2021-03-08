import { useState } from 'react';
import './styles/style.css';
import Calculator from './components/Calculator';
import ThemeTogglerButton from './components/ThemeTogglerButton';
import ThemeContext from './contexts/ThemeContext';
import { Themes } from './contexts/ThemeContext';

function App() {
  const [currentTheme, setCurrentTheme] = useState(Themes.light);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <div className={`App ${currentTheme}`} >
        <ThemeTogglerButton className="button" clickHandler={setCurrentTheme} />
        <Calculator />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
