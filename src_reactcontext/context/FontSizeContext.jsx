// context/FontSizeContext.jsx
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FontSizeContext = createContext();

const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => setFontSize((prevSize) => Math.min(prevSize + 2, 24));
  const decreaseFontSize = () => setFontSize((prevSize) => Math.max(prevSize - 2, 12));

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

FontSizeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FontSizeProvider;
