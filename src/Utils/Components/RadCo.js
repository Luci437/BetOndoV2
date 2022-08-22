import React, { useEffect, useState } from "react";

function RadCo(props) {
  const { list, userSelectedItem } = props;
  const [selectedItem, setSelectedItem] = useState(userSelectedItem || '');

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <div className="content-sub-box-check-container">
      {list?.map((data, index) => (
        <button
          className={
            selectedItem === data
              ? "content-sub-box-check-button content-sub-box-check-button-selected"
              : "content-sub-box-check-button"
          }
          onClick={() => {
            setSelectedItem(data);
          }}
          key={index}
        >
          {data}
        </button>
      ))}
    </div>
  );
}

export default RadCo;
