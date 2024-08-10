import React from "react";
import './Avatar.css';

export const Avatar = (props) => {

    const { content, 
            type="emoji", 
            altText, 
            className } = props;

    if(type === 'emoji'){
        return (
            <section className={`atl-avatar ${className || ''}`}>
                {content}
            </section>
        )    
    }

    if(type === 'image'){
        return (
            <img src={content} className={`atl-avatar atl-avatar--image ${className || ''}`} alt={altText} loading="lazy"/>
        )
    }
}