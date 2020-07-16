import React, { useState } from "react";

import { CardContainer } from "./style";

const Card = ({
  title,
  image,
  actions,
  description,
  price,
  owner,
  category,
  isEditing
}) => {
  const renderAction = () => {
    return actions.map((action, index) => <div key={index}>{action}</div>);
  };

  const [isOpened, setIsOpened] = useState(false);

  const toggleCard = () => {
    setIsOpened(!isOpened);
  };

  return (
    <CardContainer>
      <div className="card">
        <div className="card-container">
          {isEditing && <div className="card-action">{renderAction()}</div>}
          <div className="card-title">{title}</div>
          <img className="card-image" alt="product" src={image}></img>
          <div className="card-inline">
            <div className="fa fa-user-circle" />
            <div className="card-owner"> {owner}</div>
          </div>
          <div className="card-category">Category: {category}</div>
          <div className="card-price">Rp {price}</div>
          <div className="card-inline-desc">
            Description
            <div
              className={`card-toggle ${
                isOpened ? "fa fa-angle-up" : "fa fa-angle-down"
              }`}
              onClick={() => toggleCard()}
            />
          </div>
        </div>
        {isOpened && <div className="card-desc">{description}</div>}
      </div>
    </CardContainer>
  );
};

export default Card;
