import React, { useState } from "react";
import { InputField } from "../InputField/InputField";
import { Button } from "../Button/Button";

import './Popup.css';

export const Popup = (props) => {
    const { header, 
            description, 
            alwaysShow, 
            inputFields, 
            confirmCTA, 
            footerText, 
            footerTextPrefix,
            isOpen } = props;
    
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    if(!isOpen) return null
    
    if(isPopupOpen){
        return (
            <>
            {!alwaysShow && <div className="atl-popup__wrapper" onClick={() => setIsPopupOpen(!isPopupOpen)}></div>}
            <section className={`atl-popup ${alwaysShow ? '': 'atl-popup--absolute'}`}>
                {!alwaysShow && <button className="atl-popup__closeBtn" onClick={() => setIsPopupOpen(!isPopupOpen)}>X</button>}
                <div className="atl-popup__header">
                    <div className="atl-popup__heading">{header}</div>
                    <div className="atl-popup__description">{description}</div>
                </div>
                <div className="atl-popup__body">
                    {
                        inputFields?.map((field, index) => {
                            const key = `${field.label}_${index}`;
                            return <InputField key={key} {...field}/>
                        })
                    }
                    <Button {...confirmCTA}/>
                    <div className="atl-popup__footer">
                        <span>{footerTextPrefix}</span> {footerText}
                    </div>
                </div>
            </section>
            </>
        )    
    }else{
        return '';
    }
}