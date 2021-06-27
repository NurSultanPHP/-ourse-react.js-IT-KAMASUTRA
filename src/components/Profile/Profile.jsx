import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={classes.content}>
        <div className={classes.header_image}>
            <img src="https://avatars.mds.yandex.net/get-zen_doc/3901320/pub_5fb625596bd43436fc0bc045_5fb62781541585566c4a1217/scale_1200"/>          
        </div>

        <div>
            ava + desc
        </div>

        <MyPosts/>
  </div>
};

export default Profile;