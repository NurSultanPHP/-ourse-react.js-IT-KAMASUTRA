import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div className={classes.posts}>

        <Post/>

        </div>
    </div>
};

export default MyPosts;