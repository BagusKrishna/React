// Component.jsx
import { useContext, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { FontSizeContext } from './context/FontSizeContext';
import { LanguageContext } from './context/LanguageContext';

export default function Component() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { fontSize, increaseFontSize, decreaseFontSize } = useContext(FontSizeContext);
  const { language, toggleLanguage, t } = useContext(LanguageContext);

  useEffect(() => {
    const root = document.getElementById('root');

    if (theme === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [theme]);

  return (
    <div className="card" style={{ fontSize: `${fontSize}px` }}>
      <h1>{t.title}</h1>
      <p>{t.currentTheme}: {theme}</p>
      <p>{t.currentFontSize}: {fontSize}px</p>
      <div>
      <button onClick={toggleTheme}>{t.changeTheme}</button>
      <button onClick={increaseFontSize}>{t.increaseFontSize}</button>
      <button onClick={decreaseFontSize}>{t.decreaseFontSize}</button>
      <button onClick={toggleLanguage}>{t.changeLanguage}</button>
      </div>
   
    </div>
  );
}
