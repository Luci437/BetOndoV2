import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { IoFlag } from "react-icons/io5";
import { BsCaretDownFill } from "react-icons/bs";

function DropDown(props) {
  const [showList, setShowList] = useState(false);
  const modalRef = useRef();
  const { list } = props;
  const [selectedListName, setSelectedListName] = useState(
    list?.length > 0 ? list[0] : "COLLECTING..."
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    window.addEventListener("mousedown", handleModal);
    return () => {
      window.removeEventListener("mousedown", handleModal);
    };
  }, []);

  const handleModal = (event) => {
    if (modalRef.current.contains(event.target)) {
      return false;
    }
    setShowList(false);
  };

  return (
    <div className="dropDown-main-container" ref={modalRef}>
      <div
        className="dropDown-content-container"
        onClick={() => setShowList((prev) => !prev)}
        style={{
          border: showList ? `2px solid #3b75fe` : `2px solid rgb(64, 64, 64)`,
        }}
      >
        <IoFlag /> <p>{selectedListName}</p>
        <BsCaretDownFill
          className="dropDown-list-icon-down"
          style={{
            transform: showList
              ? `translateY(-50%) rotate(180deg)`
              : `translateY(-50%) rotate(0deg)`,
          }}
        />
      </div>
      {showList && list?.length > 0 && (
        <div className="dropDown-drop-list">
          <ul>
            {list?.map((listData, index) => (
              <li
                onClick={() => {
                  setSelectedListName(listData);

                  setSelectedIndex(index);
                  setTimeout(() => {
                    setShowList(false);
                  }, 400);
                }}
                key={index}
                className={
                  index === selectedIndex
                    ? "this-listItem-is-selected"
                    : "listItem-not-yet-selected"
                }
              >
                {listData}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
