import React from "react";
import './Salutation.css';

export const Salutation = (props) => {

    const { salutation, userName, description } = props;

    return (
        <section className="atl-salutation">
            <div className="atl-salutation__header">
                {salutation} {userName}
            </div>
            <div className="atl-salutation__body">
                {description}
            </div>
        </section>
    )
}