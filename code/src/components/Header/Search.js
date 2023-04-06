import React, { useState, useEffect } from 'react';
// import logoMini from '../../assets/logos/Vector-mini.png';
// import menuicon from '../../assets/icons/Menu.png';
// import searchicon from '../../assets/icons/Search.png';
import './Search.css';

const Search = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  // const isMobile = screenSize <= 640;
  // const isDesktop = screenSize >= 1025;
  console.log(screenSize);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <h2>Test</h2>
    </div>
  );
};

export default Search;
