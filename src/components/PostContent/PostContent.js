import React from "react";
import './PostContent.css';
import { Avatar } from "../Avatar/Avatar";

export const PostContent = (props) => {


    const { type="input",
            textboxPlaceholder,
            avatar } = props;

    if(type === 'input'){
        return (
            <>
                <Avatar className="atl-pc__avatar" content={avatar.emoji} />
                <input className="atl-pc__input" placeholder={textboxPlaceholder} />
            </>
        )
    }else{
        return (
            <>
                <Avatar className="atl-pc__avatar" content={avatar.emoji} />
                <div className="atl-pc__input">{textboxPlaceholder}</div>
            </>
        );
    }
}