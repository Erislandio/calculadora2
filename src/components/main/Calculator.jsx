import React from "react";
import Button from "../button/Button";
import Display from "../display/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  clearMemory = () => {
    this.setState({ ...initialState });
    console.log("limpar");
  };

  setOperation = operation => {
    console.log(operation);
  };

  addDigit = n => {
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }

    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;

    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = { ...this.state.values };
      values[i] = newValue;
      this.setState({ values });
    }
  };

  render() {
    console.log(this);

    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <Display value={displayValue} />
        <Button label="AC" triple click={() => this.clearMemory()} />
        <Button label="/" operation click={this.setOperation} />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" operation click={this.setOperation} />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" operation click={this.setOperation} />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" operation click={this.setOperation} />
        <Button label="0" double click={this.addDigit} />
        <Button label="." click={this.addDigit} />
        <Button label="=" operation click={this.setOperation} />
      </div>
    );
  }
}
