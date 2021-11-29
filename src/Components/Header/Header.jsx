import React from 'react';
import classes from "./header.module.css"
import logo from './img/logo-react.png'

const Header = () => {
  return (
    <header className={classes.header}>
        <img alt='' src ={logo}/>
    </header>
  );
}

export default Header;
