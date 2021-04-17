import React, { useCallback, useState } from "react";

import CounterOfCounter from "../components";

const CounterOfCounterContainer = () => {
  const [countersList, setCountersList] = useState([]);

  const handleAdd = useCallback(() => {
    const values = {
      countValue: 0,
      parityType: "even",
    };
    const copyCountersList = [...countersList];
    for (let i = 0; i < countersList.length; i++) {
      const foundCounter = copyCountersList[i];
      if (foundCounter.parityType === "even") {
        const newValue = foundCounter.countValue + 1;
        foundCounter.countValue = newValue;
        foundCounter.parityType = newValue % 2 === 0 ? "even" : "odd";
        setCountersList(copyCountersList);
      }
    }
    setCountersList((state) => {
      return [...state, values];
    }, []);
  }, [countersList]);
  const handleRemove = useCallback(
    (index) => {
      const copyCountersList = [...countersList];

      for (let i = 0; i < countersList.length; i++) {
        const foundCounter = copyCountersList[i];
        if (foundCounter.parityType === "odd") {
          const newValue = foundCounter.countValue - 1;
          foundCounter.countValue = newValue;
          foundCounter.parityType = newValue % 2 === 0 ? "even" : "odd";
          setCountersList(copyCountersList);
        }
      }

      copyCountersList.splice(index, 1);
      setCountersList(copyCountersList);
    },
    [countersList]
  );
  const handleIncrement = useCallback(
    (index) => {
      const copyCountersList = [...countersList];

      const foundCounter = copyCountersList[index];
      const newValue = foundCounter.countValue + 1;
      foundCounter.countValue = newValue;
      foundCounter.parityType = newValue % 2 === 0 ? "even" : "odd";

      setCountersList(copyCountersList);
    },
    [countersList]
  );
  const handleDecrement = useCallback(
    (index) => {
      if (countersList[index].countValue > 0) {
        const copyCountersList = [...countersList];
        const foundCounter = copyCountersList[index];

        const newValue = foundCounter.countValue - 1;
        foundCounter.countValue = newValue;
        foundCounter.parityType = newValue % 2 === 0 ? "even" : "odd";
        setCountersList(copyCountersList);
      }
    },
    [countersList]
  );
  const handleResetCounter = useCallback(
    (index) => {
      const copyCountersList = [...countersList];
      const foundCounter = copyCountersList[index];
      foundCounter.countValue = 0;
      foundCounter.parityType = 0 % 2 === 0 ? "even" : "odd";
      setCountersList(copyCountersList);
    },
    [countersList]
  );
  const handleReset = useCallback(() => {
    setCountersList((state) => {
      return [];
    });
  }, []);
  let sumOfValues = 0;
  for (let i = 0; i < countersList.length; i++) {
    sumOfValues += countersList[i].countValue;
  }
  return (
    <CounterOfCounter
      countersList={countersList}
      handleAdd={handleAdd}
      handleRemove={handleRemove}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleResetCounter={handleResetCounter}
      handleReset={handleReset}
      sumOfValues={sumOfValues}
    />
  );
};

export default React.memo(CounterOfCounterContainer);
