import React, {Component} from 'react';
import classes from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.content}>
                <img src="https://i.playground.ru/e/RwI1VTZpbZS9M9_4BRvDZg.jpeg?1200x1200" alt="" />
                <p>{props.message}</p>
            </div>
            <div className={classes.like}>
                <img src="https://pngimg.com/uploads/like/like_PNG73.png" alt="" />
                <span>{props.likes}</span>
            </div>

        </div>
    );
}

export default Post;