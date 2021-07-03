
import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.header_image}>
                <img src="https://avatars.mds.yandex.net/get-zen_doc/3901320/pub_5fb625596bd43436fc0bc045_5fb62781541585566c4a1217/scale_1200"/>
            </div>
                
            <div className={classes.description_block}>
                ava + desc
            </div>
        </div>
    );
};

export default ProfileInfo;