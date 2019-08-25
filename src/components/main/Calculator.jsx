import React from "react";
import Button from "../button/Button";

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    );
  }
}
