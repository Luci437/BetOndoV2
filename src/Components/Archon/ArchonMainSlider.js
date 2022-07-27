import React from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

function ArchonMainSlider() {
  return (
    <div className="archon-main-slider-container">
      <div className="archon-slider-timer-container">
        <HiArrowCircleLeft />
        <HiArrowCircleRight />
      </div>
      <div className="archon-slider-text-container">
        <h3>Today's Match</h3>
        <h6>12th Nov, 2022</h6>
      </div>
    </div>
  );
}

export default ArchonMainSlider;
