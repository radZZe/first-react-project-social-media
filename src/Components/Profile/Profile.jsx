import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return(
    <div>
      <ProfileInfo/>
      <MyPosts dispatch={props.dispatch} postsData = {props.posts.posts} newPostText ={props.posts.newPostText}/>
    </div>
  );
}

export default Profile;