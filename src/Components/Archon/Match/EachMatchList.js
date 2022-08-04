import React, { useEffect, useState } from "react";
import { IoFootballSharp } from "react-icons/io5";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { siteConstant } from "../../../Constants/commonConstants";

function EachMatchList(props) {
  const { ref, inView } = useInView({
    threshold: siteConstant.THRESHOLD,
  });
  const [viewMore, setViewMore] = useState(false);
  const { position, setSelectedContainer, selectedContainer } = props;

  const handleViewMore = () => {

    if (viewMore) {
      console.log("True")
      setViewMore(false)
      setSelectedContainer(null);
    } else {
      console.log("False");
      setViewMore(true)
      setSelectedContainer(position)
    }
  }

  useEffect(() => {
    if (position === selectedContainer) {
      setViewMore(true);
    } else {
      setViewMore(false);
    }
  }, [position, selectedContainer]);

  return (
    <div
      className={
        inView
          ? viewMore
            ? "each-match-list-container-active animateFadeIn each-match-list-container"
            : "animateFadeIn each-match-list-container"
          : "each-match-list-container"
      }
      onClick={handleViewMore}
      ref={ref}
    >
      <div className={"each-match-list-top-section"}>
        <div className="each-match-grid-container">
          <div className="each-match-top-sub-container">
            <IoFootballSharp className="each-match-icons" />
          </div>
          <div className="each-match-top-sub-container">
            <p>AGN vs PTG, 50, Grand Slam</p>
            <p className="dimmed-text">DEADLINE 12,NOV 2022</p>
          </div>
          <div className="each-match-top-sub-container">
            {viewMore ? (
              <BiChevronUp className="each-match-icons" />
            ) : (
              <BiChevronDown className="each-match-icons" />
            )}
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
