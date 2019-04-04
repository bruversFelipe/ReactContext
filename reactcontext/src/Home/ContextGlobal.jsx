import React, { useState } from "react";

const ContextGlobal = React.createContext();

const ContextGlobalProvider = ({ children }) => {
  const [count, setCount] = useState(5);
  const [percent, setPercent] = useState(0);

  const increaseBadge = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const declineBadge = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };

  const increaseProgress = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const declineProgress = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
    <ContextGlobal.Provider
      value={{
        increaseBadge,
        declineBadge,
        count,
        increaseProgress,
        declineProgress,
        percent
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export { ContextGlobalProvider };

export default ContextGlobal;
