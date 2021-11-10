import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      // 마지막꺼 다음에 첫번째꺼 오게 해서 무한 슬라이드 가능
      infinite: true,
      // 슬라이드 간 거리
      centerPadding: "60px",
      // 한번에 보여줄 개수
      slidesToShow: 3,
      // 드래그해서 슬라이드 가능
      swipeToSlide: true,
      arrow: true,

      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div style={{ padding: 25 }}>
        <h2>시간의 흐름에 따른 환경 지표의 변화</h2>
        <Slider {...settings}>
          <div>
            <h3 witdth="100%">해수면 높이</h3>
          </div>
          <div>
            <h3 witdth="100%">해수면 온도</h3>
          </div>
          <div>
            <h3 witdth="100%">미세먼지 현황</h3>
          </div>
          <div>
            <h3 witdth="100%">북극 빙하 너비</h3>
          </div>
          <div>
            <h3 witdth="100%">일산화탄소 수준</h3>
          </div>
          <div>
            <h3 witdth="100%">또 뭐가 있겠지</h3>
          </div>
          <div>
            <h3 witdth="100%">API 폭탄</h3>
          </div>
        </Slider>
      </div>
    );
  }
}