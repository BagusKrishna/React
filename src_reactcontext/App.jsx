// App.jsx
import './App.css';
import Component from './Component.jsx';
import ThemeProvider from './context/ThemeContext.jsx';
import FontSizeProvider from './context/FontSizeContext.jsx';
import LanguageProvider from './context/LanguageContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <FontSizeProvider>
        <LanguageProvider>
          <Component />
        </LanguageProvider>
      </FontSizeProvider>
    </ThemeProvider>
  );
}

export default App;
