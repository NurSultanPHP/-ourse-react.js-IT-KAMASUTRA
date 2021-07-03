import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
        <div className={classes.user}>
            <img src="https://pic.rutube.ru/user/bb/ab/bbaba50cc7948297dd62c2aa971153a1.jpg" alt="avatar" className={classes.user_img}/>
            <span className={classes.user_name}>{props.nickname}</span>                    
        </div>
        <div className={classes.content}>
            <p className={classes.user_post}>
                {props.message}
            </p>
            <div className={`${classes.like} ${classes.active}`}>Like <span className={classes.like_sum}>{props.likeCount}</span></div>
        </div>
        
    </div>
    );
};

export default Post;