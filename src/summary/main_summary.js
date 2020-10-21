import React from 'react';
import Total from './Total';
import Summary from './Summary';

export default function MainSummary(props){
  // console.log("mainS",props)
  return(
<section className="main__summary">
    <h2>Your cart</h2>
    {Object.keys(props.selected).map((feature, idx) => 
      <Summary
      key={idx}
      feature={feature}
      option={props.selected[feature].name}
      cost={props.selected[feature].cost}
      dollarFormat={props.dollarFormat}
      />
  )}
  <Total
  selected={props.selected}
  dollarFormat={props.dollarFormat}
  />
  </section>
  )
  }