import React from "react";
import '../style/Coming.css';


const Coming = (props) => {
    return (
        <>
            <div className="typewriter">
            <h2 className="pretext">Hi 👋</h2>
                <div className="footer-text">
                    {props.content}
                </div>
            </div>
        </>
    )
};

export default Coming;