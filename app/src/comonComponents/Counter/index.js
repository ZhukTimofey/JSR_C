import PropTypes from "prop-types";

import "./style.css";

const Counter = ({
  countValue,
  parityType,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleRemove,
}) => {
  return (
    <div className="counter_wrapper">
      {handleDecrement}
      <div
        className="countScreen"
        style={{ borderColor: parityType === "even" ? "red" : "blue" }}
      >
        {" "}
        {countValue}
      </div>
      <div>{parityType}</div>
      <div className="buttons_wrapper">
        <button className="buttons" onClick={handleIncrement}>
          +
        </button>
        <button className="buttons" onClick={handleReset}>
          reset
        </button>
        <button className="buttons" onClick={handleDecrement}>
          -
        </button>
      </div>
      <button onClick={handleRemove}>Remove </button>
    </div>
  );
};
Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  parityType: PropTypes.string.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};
export default Counter;
