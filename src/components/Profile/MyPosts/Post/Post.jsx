import React from "react";
import classes from "./Post.module.css";

const Post = () => {
    return (
        <div className={classes.item}>
        <div className={classes.user}>
            <img src="https://pic.rutube.ru/user/bb/ab/bbaba50cc7948297dd62c2aa971153a1.jpg" alt="avatar" className={classes.user_img}/>
            <span className={classes.user_name}>Itpedia</span>                    
        </div>
        <div className={classes.content}>
            <p className={classes.user_post}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus modi nulla cumque nam, accusantium incidunt neque,
                suscipit ea cupiditate eius unde? Consectetur earum velit
                est veritatis nihil ipsum, enim ipsa?
            </p>
            <div className={`${classes.like} ${classes.active}`}>Like <span className={classes.like_sum}>0</span></div>
        </div>
        
    </div>
    );
};

export default Post;