import React from 'react';

export default class PiggyBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }

  addToSavings() {
    this.setState((prevState) => {
      return {total: prevState.total + 1};
    })
  }

  render() {
    return (
      <div className="piggy-bank">
        <h3>{this.props.title}</h3>
        <p>Total: £{this.state.total}</p>
        <button onClick={this.addToSavings.bind(this)}>
          Add £1
        </button>
      </div>
    )
  }
}
