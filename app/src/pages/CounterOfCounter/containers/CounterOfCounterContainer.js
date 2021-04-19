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
    copyCountersList.map(function (elem) {
      if (elem.parityType === "even") {
        const newValue = elem.countValue + 1;
        elem.countValue = newValue;
        elem.parityType = newValue % 2 === 0 ? "even" : "odd";
      }
    });
    setCountersList((state) => {
      return [...state, values];
    }, []);
  }, [countersList]);
  const handleRemove = useCallback(
    (index) => {
      const copyCountersList = [...countersList];
      copyCountersList.map(function (elem) {
        if (elem.parityType === "odd" && elem.countValue !== 0) {
          const newValue = elem.countValue - 1;
          elem.countValue = newValue;
          elem.parityType = newValue % 2 === 0 ? "even" : "odd";
        }
      });

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
      foundCounter.parityType = "even";

      setCountersList(copyCountersList);
    },
    [countersList]
  );
  const handleReset = () => {
    setCountersList([]);
  };

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
