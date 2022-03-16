import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsItem from './FriendsItem/FriendsItem';
import classes from "./navbar.module.css"

const Navbar = (props) => {

  let navbarData = props.state.sidebar;
  let FriendsElements = navbarData.friends.map((m) => <FriendsItem name={m.name} pic={m.pic}/>)
  return (<nav className={classes.navbar}>
        <div className={classes.navbar_content}>
          <div className={classes.item}><NavLink activeClassName={classes.active} to="/profile">PROFILE</NavLink></div>
          <div className={classes.item}><NavLink activeClassName={classes.active} to="/dialogs">MESSAGES</NavLink></div>
          <div className={classes.item}><NavLink activeClassName={classes.active} to="/news">NEWS</NavLink></div>
          <div className={classes.item}><NavLink activeClassName={classes.active} to="/music">MUSIC</NavLink></div>
          <div className={classes.item}><NavLink activeClassName={classes.active} to="/users">USERS</NavLink></div>
          <div className={`${classes.navbar_settings} ${classes.item}`}><NavLink activeClassName={classes.active}
                                                                                 to="/settings">SETTINGS</NavLink></div>
          <div className={classes.friendsZone}>
            <h3>FRIENDS</h3>
            <div className={classes.FriendsList}>
              {FriendsElements}
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar;
