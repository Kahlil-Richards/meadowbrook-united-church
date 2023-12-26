import React from "react";


function Button(props) {
    return (
        <>
            <button className="button">
                <h1 className="button__text">{props.text}</h1>
            </button>
        </>
    )
}

export default Button