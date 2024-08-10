import React, { useState } from "react";
import { createPortal } from 'react-dom';

import { Popup } from "../Popup/Popup";
import { signUpData } from "../../service/signup.data";


import './Button.css';

export const Button = (props) => {

    const { ctaText, type = 'submit', nodeName = 'button', href, target = '_self' } = props;

    const [portal, setPortal] = useState();

    const NodeName = nodeName;

    const handleOnClick = () => {
        if(type === 'popup'){
            setPortal(createPortal(<Popup {...signUpData} isOpen={true}/>, document.getElementById('root')))
        }
    }

    return (
        <NodeName 
            className="atl-button" 
            type={type} 
            href={href} 
            target={target}
            onClick={handleOnClick}>{ctaText} {portal}</NodeName>
    )
}