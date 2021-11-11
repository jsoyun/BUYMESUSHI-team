import Modal from "react-modal";
import Slider from "react-slick";
import styled from "styled-components";
import NewsApi from "./NewsApi.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function News({ sliders }) {
  const settings = {
    className: "center",
    // 마지막꺼 다음에 첫번째꺼 오게 해서 무한 슬라이드 가능
    infinite: false,
    // 슬라이드 끝이 안 짤릴 수 있게
    centerPadding: "0px",
    // 한번에 보여줄 개수
    slidesToShow: "1",
    // 드래그해서 슬라이드 가능
    swipeToSlide: true,
    arrow: true,
    // centerMode: true,
    autoplaySpeed: 2000,

    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  const StyledSlider = styled(Slider)``;

  return (
    <div>
      {/* map 함수 */}
      <StyledSlider {...settings}>
        {/* ApiPageModal이라는 컴포넌트를 가져왔는데 이건 map 함수 써서 반복되게 해야 하나... */}

        <NewsApi />
      </StyledSlider>
    </div>
  );
}
Modal.setAppElement("#root");

export default News;
