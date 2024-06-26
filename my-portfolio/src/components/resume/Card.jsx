import React from "react";

const Card = (props) => {
  
  return (
    <div className="resume__item">
      <div className="resume__header">
        <h3 className="resume__subtitle">
            {props.title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
