import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function GoalLiveCounter(props) {
  const { setFunction } = props;
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    setFunction(currentCount)
  }, [currentCount])

  return (
    <div className="live-counter-container">
      <button
        className="live-counter-buttons live-counter-buttons-top"
        onClick={() => setCurrentCount((prev) => (prev < 20 ? prev + 1 : prev))}
      >
        <IoIosArrowUp />
      </button>
      <p>{currentCount < 10 ? `0${currentCount}` : currentCount}</p>
      <button
        className="live-counter-buttons live-counter-buttons-bottom"
        onClick={() => setCurrentCount((prev) => (prev > 0 ? prev - 1 : prev))}
      >
        <IoIosArrowDown />
      </button>
    </div>
  );
}

export default GoalLiveCounter;
