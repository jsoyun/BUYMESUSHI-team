// 메인 스크롤하면 2번째로 나오는 페이지
// NewsApi
import NewsItem from "./NewsItem";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
// import "/styles/newsApi.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-grow: row;
  flex-wrap: nowrap;
  float: left;
`;

const NewsApi = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=55ee2d88a6d74797b9d1dead15f2b8d5"
      );
      setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  }, []);

  return (
    <Container>
      {articles.map(({ title, description, url, urlToImage }) => (
        <NewsItem
          title={title}
          description={description}
          url={url}
          urlToImage={urlToImage}
        />
      ))}
    </Container>
  );
};

export default NewsApi;
