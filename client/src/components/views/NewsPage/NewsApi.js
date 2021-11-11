// 메인 스크롤하면 2번째로 나오는 페이지
// NewsApi
import NewsItem from "./NewsItem";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
// import "/styles/newsApi.css";

const NewsHead = styled.h1`
  /* align-content: center; */
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 1px solid blue;
  max-width: 100%;
  margin: 1rem auto;
  display: gird;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

const BtnSlider = styled.button`
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
const DotBox = styled.div``;
const Dot = styled.div``;

const NewsApi = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // const timer = setTimeout(timer);

    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=55ee2d88a6d74797b9d1dead15f2b8d5"
      );
      setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  }, []);

  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== articles.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === articles.length) {
      setSlideIndex(1);
    }
  };

  const prevSlider = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(articles.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <NewsHead>News and Features</NewsHead>
      <hr />
      <Container>
        {articles.map(({ title, description, url, urlToImage }) => (
          <NewsItem
            title={title}
            description={description}
            url={url}
            urlToImage={urlToImage}
          />
        ))}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlider} direction={"prev"} />

        <DotBox>
          {Array.from({ length: 5 }).map((item, index) => (
            <Dot
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot act" : "dot"}
            ></Dot>
          ))}
        </DotBox>
      </Container>
    </>
  );
};

export default NewsApi;
