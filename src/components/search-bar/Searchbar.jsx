import React from 'react';
import '../../styles/Searchbar.scss';
const Searchbar = ({ children }) => {
  return <header className="searchbar">{children}</header>;
};

export default Searchbar;
