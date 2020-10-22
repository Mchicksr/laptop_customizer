import React from "react";
import features from "../STORE";
// import Options from "./Options";
import Options from './Options'



export default function Features(props){
    //  console.log('props',props)
  
        return (
          <fieldset className="feature">
            <legend className="feature__name">
              <h3>{props.feature}</h3>
            </legend>
            {Object.keys(props.options).map((option,idx)=>
            <Options
            key={idx}
            name={option.name}
            feature={props.feature}
            cost={option.cost}
            index={idx}
            handleUpdate={props.handleUpdate}
            selected={props.selected}
            dollarFormat={props.dollarFormat}
            />
            )}
          </fieldset>
        );
     
}