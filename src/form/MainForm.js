import React from "react";
import Features from "./Features";
// import features from "./features";

export default function MainForm(props){
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {Object.entries(props.features).map((feature, idx) => 
                <Features
                    key={idx}
                    feature={feature[0]}
                    options={feature[1]}
                    handleUpdate={props.handleUpdate}
                    selected={props.selected}
                    dollarFormat={props.dollarFormat}
                />
        )}
    </form>
    )
} 
    
