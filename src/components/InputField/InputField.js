import React from "react";
import './InputField.css';

export const InputField = (props) => {

    const { label, placeholder, type, helperText } = props;

    return (
        <section className="atl-if">
            <div className="atl-if__header">
                <label>{label}</label>
                <span>{helperText}</span>
            </div>
            <div className="atl-if__input">
                <input type={type} placeholder={placeholder} />
            </div>
        </section>
    )
}