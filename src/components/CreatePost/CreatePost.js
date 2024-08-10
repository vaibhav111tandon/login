import React from "react";
import "./CreatePost.css";
import { Button } from "../Button/Button";
import { PostContent } from "../PostContent/PostContent";

export const CreatePost = (props) => {

    const {heading, textboxPlaceholder, emoji, createPostButtonText} = props;

    const avatar = {
        emoji: emoji,
        type: 'emoji'
    }

    return (
        <section className="atl-cp">
            <div className="atl-cp__header">
                {heading}
            </div>
            <div className="atl-cp__body">
                <PostContent avatar={avatar} textboxPlaceholder={textboxPlaceholder} type="input"/>
            </div>
            <div className="atl-cp__btnWrapper">
                <Button {...createPostButtonText} />
            </div>
        </section>
    )
}