// 뉴스 기사 맵핑
import React from "react";
import styled from "styled-components";

const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: row;
  flex-wrap: nowrap;
  float: left;
`;

const Item = styled.div`
  position: relative;
  flex-grow: row;
  flex-wrap: nowrap;
  float: left;
  justify-content: space-evenly;
  width: 350px;
  height: 420px;
  border: 2px solid red;
  background-color: black;
`;

const NewsImg = styled.img`
  width: 350px;
  height: 200px;
  position: absolute;
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
  /* width: 330px;
    height: 30px; */
  color: white;
  margin-top: 295px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
`;

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <NewsContainer>
      <Item>
        <NewsImg src={urlToImage} alt="NewImage" />
        <Headline href={url}>{title}</Headline>
        <Desc>{description}</Desc>
      </Item>
    </NewsContainer>
  );
};

export default NewsItem;
