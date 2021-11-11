// 뉴스 기사 맵핑
import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  position: relative;
  width: 350px;
  height: 420px;
  border: 2px solid red;
  background-color: black;
`;

const Headline = styled.a`
  width: 330px;
  height: 50px;
  position: absolute;
  margin-top: 215px;
  margin-left: 12px;
  margin-right: 12px;
  color: white;
  font-size: 18px;
`;

const Desc = styled.div`
  position: absolute;
  color: white;
  margin-top: 295px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
`;

const FineDustItem = ({ pm10Value, pm25Value, stationName }) => {
  return (
    <Item>
      <Desc>{pm10Value}</Desc>
      <Desc>{pm25Value}</Desc>
      <Desc>{stationName}</Desc>
    </Item>
  );
};

export default FineDustItem;
