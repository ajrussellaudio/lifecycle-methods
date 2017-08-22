import React from 'react';

export default class PiggyBank extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructing...");
    this.state = {
      total: 0
    };
  }

  componentWillMount() {
    console.log("Component WILL mount");
    const button = document.querySelector("button");
    console.log("Button:", button);
  }

  componentDidMount() {
    console.log("Component DID mount");
    const button = document.querySelector("button");
    console.log("Button:", button);
  }

  componentWillUnmount() {

  }

  shouldComponentUpdate() {
    console.log("Should component update?");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL update");
    // console.log("this.state:", this.state);
    // console.log("nextState:", nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID update");
    console.log("this.state:", this.state);
    console.log("prevState:", prevState);
  }

  addToSavings() {
    this.setState((prevState) => {
      return {total: prevState.total + 1};
    })
  }

  render() {
    console.log("Rendering...");
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
