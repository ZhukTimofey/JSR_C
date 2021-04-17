import React from "react";
import PropTypes from "prop-types";

import Counter from "../../../comonComponents/Counter";

const CounterOfCounter = ({
  countersList,
  handleAdd,
  handleRemove,
  handleIncrement,
  handleDecrement,
  handleResetCounter,
  handleReset,
  sumOfValues,
}) => {
  return (
    <div>
      <h1>Counter Of Counter</h1>
      <button onClick={handleAdd}>Add Counter</button>
      <button onClick={handleReset}>Reset page</button>

      {countersList.map(({ countValue, parityType }, index) => (
        <Counter
          countValue={countValue}
          parityType={parityType}
          key={index}
          handleRemove={() => handleRemove(index)}
          handleIncrement={() => handleIncrement(index)}
          handleDecrement={() => handleDecrement(index)}
          handleResetCounter={() => handleResetCounter(index)}
        />
      ))}
      <div>
        <h2>Numbers of counters</h2>
        <div>{countersList.length}</div>
      </div>
      <div>
        <h2>Sum of values</h2>
        <div>{sumOfValues}</div>
      </div>
    </div>
  );
};
CounterOfCounter.propTypes = {
  userList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      countValue: PropTypes.number,
      parityType: PropTypes.string,
    })
  ),
};
export default CounterOfCounter;
