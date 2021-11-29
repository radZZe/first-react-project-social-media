import React from 'react';
import classes from "./FriendsItem.module.css"

const FriendsItem = (props) => {
  return( 
      <div className={classes.item}>
          <img src={props.pic} alt="" />
          <span>{props.name}</span>
      </div>
  );
}

export default FriendsItem;