import React, { useState, useEffect, useRef, useCallback } from "react";

import Counter from "../../../comonComponents/Counter";
import PropTypes from "prop-types";

const CounterPageContainer = () => {
  const [counterState, setCounterState] = useState({
    countValue: 0,
    parityType: "even",
  });
  const handleIncrement = useCallback(() => {
    setCounterState((state) => {
      const countValue = state.countValue + 1;
      return {
        ...counterState,
        countValue,
      };
    });
  }, []);
  const handleDecrement = useCallback(() => {
    if (counterState.countValue > 0) {
      setCounterState((state) => {
        const countValue = state.countValue - 1;
        return {
          ...counterState,
          countValue,
        };
      });
    }
  }, [counterState.countValue]);
  const handleReset = useCallback(() => {
    setCounterState((state) => {
      const countValue = 0;
      const parityType = "even";
      return {
        countValue,
        parityType,
      };
    });
  }, []);
  useEffect(() => {
    if (counterState.countValue.prev !== counterState.countValue) {
      setCounterState((state) => {
        const parityType = counterState.countValue % 2 === 0 ? "even" : "odd";
        return {
          ...counterState,
          parityType,
        };
      });
    }
  }, [counterState.countValue]);
  return (
    <Counter
      countValue={counterState.countValue}
      parityType={counterState.parityType}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};

export default CounterPageContainer;
