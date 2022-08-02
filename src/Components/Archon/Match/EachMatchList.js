import React, { useState } from "react";
import { IoFootballSharp } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { siteConstant } from "../../../Constants/commonConstants";

function EachMatchList() {
  const { ref, inView } = useInView({
    threshold: siteConstant.THRESHOLD,
  });
  const [viewMore, setViewMore] = useState(false)

  return (
    <div
      className={
        inView
          ? "animateFadeIn each-match-list-container"
          : "each-match-list-container"
      }
      ref={ref}
    >
      <div className="each-match-list-top-section">
        <div className="each-match-grid-container">
          <div className="each-match-top-sub-container">
            <IoFootballSharp className="each-match-icons" />
          </div>
          <div className="each-match-top-sub-container">
            <p>AGN vs PTG, 50, Grand Slam</p>
            <p className="dimmed-text">DEADLINE 12,NOV 2022</p>
          </div>
          <div
            className="each-match-top-sub-container"
            onClick={() => setViewMore((prev) => !prev)}
          >
            <BiChevronDown className="each-match-icons" />
          </div>
        </div>
        {viewMore && (
          <div
            className="each-trio-container"
            style={{ background: viewMore && "#2B323B" }}
          >
            <div className="trio-container">
              <BsPeopleFill className="each-match-icons-dimmed" />
              <div className="trio-data-part">
                <p className="dimmed-text">ENTRIES</p>
                <p className="tiro-data-text">12K</p>
              </div>
            </div>
            <div className="trio-container">
              <FaBitcoin className="each-match-icons-dimmed" />
              <div className="trio-data-part">
                <p className="dimmed-text">FEES</p>
                <p className="tiro-data-text">12K</p>
              </div>
            </div>
            {/* <div className="trio-container">
            <BsPeopleFill className="each-match-icons-dimmed" />
            <div className="trio-data-part">
              <p className="dimmed-text">POOL</p>
              <p className="tiro-data-text">12K</p>
            </div>
          </div> */}
          </div>
        )}
      </div>
      {/* <div className="each-match-list-bottom-section">1.1</div> */}
    </div>
  );
}

export default EachMatchList;
