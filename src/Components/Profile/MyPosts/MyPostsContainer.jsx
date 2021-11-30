import React from 'react';
import Post from './Post/Post';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
    debugger;
    let state = props.store.getState();

    let onAddNewPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onChangePostText = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text))
    };
    return (
        <MyPosts newPostText={state.ProfilePage.newPostText} postsData={state.ProfilePage.posts} addNewPost={onAddNewPost} updateNewPostText={onChangePostText}/>
    );
}

export default MyPostsContainer;