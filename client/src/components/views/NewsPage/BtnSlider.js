import React from "react";
import NewsItem from "./NewsItem";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import styled from "styled-components";

const Button = styled.h1`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f1f1f1;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <Button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <NewsItem src={direction === "next" ? rightArrow : leftArrow} />
    </Button>
  );
}
