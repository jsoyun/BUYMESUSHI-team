// 뉴스 기사 맵핑
import React from "react";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-container">
      <div className="news-item">
        <img className="news-image" src={urlToImage} alt="NewImage" />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
