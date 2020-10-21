import React, { Component } from 'react';
import features from './STORE';
import './App.css';

import Header from "./header/header"
import MainForm from './form/MainForm'
import MainSummary from './summary/main_summary';
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: features.Processor[0],
      'Operating System': features['Operating System'][0],
      'Video Card': features['Video Card'][0],
      Display: features.Display[0]
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
///////////////////////////////////
  render() {
    
    

//////////////////////////////////////////
    return (
      <div className="App">
        <Header />
        <main>
          
          <MainForm 
          features={features}
          dollarFormat={USCurrencyFormat}
          handleUpdate={this.updateFeature}
          selected ={this.state.selected}
           />
          
          <MainSummary

        selected={this.state.selected}
        dollarFormat={USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}

export default App;


// Processor: {
      //   name: '17th Generation Intel Core HB (7 Core with donut spare)',
      //   cost: 700
      // },
      // 'Operating System': {
      //   name: 'Ubuntu Linux 16.04',
      //   cost: 200
      // },
      // 'Video Card': {
      //   name: 'Toyota Corolla 1.5v',
      //   cost: 1150.98
      // },
      // Display: {
      //   name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      //   cost: 1500
      // }

  /* <header>
          <h1>ELF Computing | Laptops</h1>
        </header> */


      // <div className=" ">
      //         <div className="summary__total__label">Total</div>
      //         <div className="summary__total__value">
      //           {USCurrencyFormat.format(total)}
      //         </div>
      //       </div>


    // const total = Object.keys(this.state.selected).reduce(
    //   (acc, curr) => acc + this.state.selected[curr].cost,
    //   0
    // );

    // return (
      //   <div className="summary__option" key={featureHash}>
      //     <div className="summary__option__label">{feature} </div>
      //     <div className="summary__option__value">{selectedOption.name}</div>
      //     <div className="summary__option__cost">
      //       {USCurrencyFormat.format(selectedOption.cost)}
      //     </div>
      //   </div>
      // );

      // 85<form className="main__form">
      //       <h2>Customize your laptop</h2>
            
      //     </form>

    //   <section className="main__summary">
    //   <h2>Your cart</h2>
    //   {summary}
      
    // </section>


    // const features = Object.keys(this.props.features).map((feature, idx) => {
    
      // const featureHash = feature + '-' + idx;
      // const options = this.props.features[feature].map(item => {
      //   const itemHash = slugify(JSON.stringify(item));
      //   return (
      //     <div key={itemHash} className="feature__item">
      //       <input
      //         type="radio"
      //         id={itemHash}
      //         className="feature__option"
      //         name={slugify(feature)}
      //         checked={item.name === this.state.selected[feature].name}
      //         onChange={e => this.updateFeature(feature, item)}
      //       />
      //       <label htmlFor={itemHash} className="feature__label">
      //         {item.name} ({USCurrencyFormat.format(item.cost)})
      //       </label>
      //     </div>
      //   );
      // });

      // return (
      //   <fieldset className="feature" key={featureHash}>
      //     <legend className="feature__name">
      //       <h3>{feature}</h3>
      //     </legend>
      //     {options}
      //   </fieldset>
      // );
    // });
