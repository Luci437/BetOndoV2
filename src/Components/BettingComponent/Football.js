import React, { useState } from "react";
import { IoMdFootball } from "react-icons/io";

function Football() {
  const [animationNames] = useState([
    "football-ani1",
    "football-ani2",
    "football-ani3",
    "football-ani4",
  ]);

  const [selectedAnimation] = useState(
    animationNames[Math.floor(Math.random() * animationNames.length)]
  );

  return (
    <div className={`football-court-football-container ${selectedAnimation}`}>
      <IoMdFootball className="football-court-football" />
    </div>
  );
}

export default Football;
