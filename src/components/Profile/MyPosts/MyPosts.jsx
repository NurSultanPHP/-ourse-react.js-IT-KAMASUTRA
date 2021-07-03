import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={classes.posts_block}>
        <h3>My posts</h3>

        <div className={classes.add_posts}>
            <textarea name="" id="" cols="30" rows="1" className={classes.post_text}></textarea>
            <button className={classes.add_post}>Add post</button>
        </div>

        <div className={classes.posts}>

        <Post message="hello" likeCount="1763" nickname="Itpedia"/>

        </div>
    </div>
};

export default MyPosts;