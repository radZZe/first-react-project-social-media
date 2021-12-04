import React from 'react';
import Post from './Post/Post';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from './MyPosts'
import ContextStore from '../../../Context';

const MyPostsContainer = () => {
    return (
        <ContextStore.Consumer>
            {
            (store) => {
                let state = store.getState();

                let onAddNewPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onChangePostText = (text) => {
                    store.dispatch(updatePostTextActionCreator(text))
                };

                return (<MyPosts newPostText={state.ProfilePage.newPostText} postsData={state.ProfilePage.posts} addNewPost={onAddNewPost}  updateNewPostText={onChangePostText}/>)
                }
            }
        </ContextStore.Consumer>
    );
}

export default MyPostsContainer;