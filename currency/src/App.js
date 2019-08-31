import React, { Component } from 'react';
import Form from './components/Form';
import CurrencyInfo from './components/CurrencyInfo';

const key = '2dd97263ab44af96a3bcfafbb472437e';

class App extends Component {

  state = {
    eur: undefined,
    rub: undefined,
    error: true,
  };

  gettigCurrency = async (e) => {
    e.preventDefault();
    const apiUrl = await fetch(`http://www.apilayer.net/api/live?access_key=${key}`);
    const data = await apiUrl.json();

    let eur = data.quotes.USDEUR;
    let rub = data.quotes.USDRUB;

    this.setState({
      eur: eur,
      rub: rub,
      error: false,
    });
  };

  clearCurrency = async (e) => {
    e.preventDefault();
    this.setState({
      eur: undefined,
      rub: undefined,
      error: true,
    });
  };

  render() {
    return (
      <div>
      <CurrencyInfo error={this.state.error} eur={this.state.eur} rub={this.state.rub} />
    <Form error={this.state.error} currencyMethod={this.gettigCurrency} clearMethod={this.clearCurrency} />
    </div>
  );
  }
}


export default App;
