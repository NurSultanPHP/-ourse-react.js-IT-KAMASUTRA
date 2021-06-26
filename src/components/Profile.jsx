import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src="https://avatars.mds.yandex.net/get-zen_doc/3901320/pub_5fb625596bd43436fc0bc045_5fb62781541585566c4a1217/scale_1200"/>          
        </div>

        <div>
            ava + desc
        </div>

        <div>
                My posts
            <div className={classes.posts}>
                <div className={classes.item}>
                    new posts
                </div>
                <div className={classes.item}>
                    post 1
                </div>
                <div className={classes.item}>
                    post 2
                </div>                
            </div>

        </div>
  </div>
};

export default Profile;