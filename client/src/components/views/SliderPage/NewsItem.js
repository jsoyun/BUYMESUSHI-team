// 뉴스 기사 맵핑
import React from "react";
import styled from "styled-components";

const NewsContainer = styled.div`
  width: 100%;
  /* flex-grow: row;
    flex-wrap: nowrap;
    flex-direction: row;
    position: absolute; */
`;

const Item = styled.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  width: 350px;
  height: 420px;
  border: 2px solid red;
  background-color: black;
  float: left;
`;

const NewsImg = styled.img`
  width: 350px;
  height: 200px;
  position: absolute;
`;

const Headline = styled.div`
  width: 330px;
  height: 50px;
  position: absolute;
  margin-top: 200px;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`;

const Desc = styled.div`
  position: absolute;
  /* width: 330px;
    height: 30px; */
  color: white;
  margin-top: 280px;
  margin-left: 10px;
  margin-right: 10px;
`;

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <NewsContainer>
      <Item>
        <NewsImg src={urlToImage} alt="NewImage" />
        <Headline>
          <a href={url}>{title}</a>
        </Headline>
        <Desc>{description}</Desc>
      </Item>
    </NewsContainer>
  );
};

export default NewsItem;
