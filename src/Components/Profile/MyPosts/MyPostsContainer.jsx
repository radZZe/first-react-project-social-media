import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from './MyPosts'
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText:state.ProfilePage.newPostText,
        postsData:state.ProfilePage.posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText:(text) => {
            dispatch(updatePostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;