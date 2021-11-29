import React from 'react';
import classes from "./../profile.module.css"



const ProfileInfo = (props) =>{
  return(
  <div>  
    <div className={classes.background}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoI82dQ4RRe2jJboyhw2sLZofK-Kt8GhMQMg&usqp=CAU"/>
    </div>
    <div>
      ava + description
    </div>
  </div>
    )
}

export default ProfileInfo;