import React, { Component } from "react";

import Counter from "../components/Counter";
import PropTypes from "prop-types";

class CounterPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countValue: 0,
      parity: "even",
      countScreenClassName: "countScreenR",
    };
  }
  handleIncrement = () => {
    this.setState((state) => {
      const countValue = state.countValue + 1;
      const parity = countValue % 2 == 0 ? "even" : "odd";
      const countScreenClassName =
        countValue % 2 == 0 ? "countScreenR" : "countScreenB";
      return {
        ...state,
        countValue,
        parity,
        countScreenClassName,
      };
    });
  };

  handleDecrement = () => {
    this.setState((state) => {
      const countValue = state.countValue - 1;
      if (countValue >= 0) {
        const parity = countValue % 2 == 0 ? "even" : "odd";
        const countScreenClassName =
          countValue % 2 == 0 ? "countScreenR" : "countScreenB";
        return {
          ...state,
          countValue,
          parity,
          countScreenClassName,
        };
      }
    });
  };
  handleReset = () => {
    this.setState({
      countValue: 0,
      parity: "even",
      countScreenClassName: "countScreenR",
    });
  };
  render() {
    return (
      <Counter
        countValue={this.state.countValue}
        parity={this.state.parity}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}
        countScreenClassName={this.state.countScreenClassName}
      />
    );
  }
}

export default CounterPageContainer;
