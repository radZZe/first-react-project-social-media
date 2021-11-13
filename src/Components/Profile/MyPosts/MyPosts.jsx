import React, {Component} from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postsData.map((p) => <Post likes={p.likesCount} message={p.message}/>)
    let newPostElemnt = React.createRef();
    let addNewPost = () => {
        props.addPost();
    }
    let changePostText = () => {
        let text = newPostElemnt.current.value;
        props.updatePostText(text);

    };
    return (
        <div>
            my posts
            <div>
                <div>
                    <textarea onChange={changePostText} value={props.newPostText} ref={newPostElemnt} />
                </div>
                <div>
                    <button onClick={addNewPost}>Add Post</button>
                </div>
                
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;