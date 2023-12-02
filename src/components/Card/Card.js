import React from "react";

export const Card = ({
  img,
  imgAlt,
  title,
  description,
  secondaryText,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div style={{ border: "1px solid", width: "300px" }}>
      {img && <img src={img} alt={imgAlt} />}
      <h5>{title}</h5>
      {secondaryText && <p>{secondaryText}</p>}
      <span>{description}</span>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};
