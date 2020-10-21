import React from 'react';
import Total from './Total';
import Summary from './Summary';

export default function MainSummary(props){
  return(
<section className="main__summary">
    <h2>Your cart</h2>
    {Object.keys(props.selected).map((feature, idx) => 
      <Summary
      key={idx}
      feature={feature[0]}
      option={feature[1].name}
      cost={feature[1].cost}
      dollarFormat={props.dollarFormat}
      />
  )}
  <Total
  selcted={props.selected}
  dollarFormat={props.dollarFormat}
  />
  </section>
  )
  }