import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ApiPage({ sliders }) {

  const settings = {
    className: "center",
    // 마지막꺼 다음에 첫번째꺼 오게 해서 무한 슬라이드 가능
    infinite: true,
    // 슬라이드 끝이 안 짤릴 수 있게
    centerPadding: "0px",
    // 한번에 보여줄 개수
    slidesToShow: 3,
    // 드래그해서 슬라이드 가능
    swipeToSlide: true,
    arrow: true,
    // centerMode: true,

    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  // 슬라이드 CSS 커스텀
  const StyledSlider = styled(Slider)`
.slick-list {
  width: 1600px;
  margin: 0 auto;
}

/* .slick-arrow {
  color: red;
} */

.slick-slide div {
  /* align-items: center; */
  text-align: center;
  /* border: 2px #5c75bb; */
}

.slick-dots {
  bottom: -50px;
  margin-top: 200px;
}

.slick-track {
  /* overflow-x: hidden; */
}
`;

  // 열린 모달은 모달바깥쪽을 클릭하거나 닫기버튼을 클릭하거나 ESC키를 클릭해서 닫는다.
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div style={{ padding: "25px" }}>
      <h2>시간의 흐름에 따른 환경 지표의 변화</h2>
      <StyledSlider {...settings}>
        <div>
          <button onClick={() => setModalIsOpen(true)}>해수면 높이</button>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            API 내용 담을 모달
            <button onClick={() => setModalIsOpen(false)}>X</button>
          </Modal>
        </div>
        <div>
          <button onClick={() => setModalIsOpen(true)}>해수면 온도</button>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            API 내용 담을 모달
            <button onClick={() => setModalIsOpen(false)}>X</button>
          </Modal>
        </div>
        <div>
          <button onClick={() => setModalIsOpen(true)}>미세먼지</button>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            API 내용 담을 모달
            <button onClick={() => setModalIsOpen(false)}>X</button>
          </Modal>
        </div>
        <div>
          <button onClick={() => setModalIsOpen(true)}>북극 빙하 너비</button>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            API 내용 담을 모달
            <button onClick={() => setModalIsOpen(false)}>X</button>
          </Modal>
        </div>
        <div>
          <button onClick={() => setModalIsOpen(true)}>대기중 일산화탄소 농도</button>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            API 내용 담을 모달
            <button onClick={() => setModalIsOpen(false)}>X</button>
          </Modal>
        </div>
        <div>
          <button onClick={() => setModalIsOpen(true)}>뭔가 안좋은거</button>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            API 내용 담을 모달
            <button onClick={() => setModalIsOpen(false)}>X</button>
          </Modal>
        </div>
        <div>
          <button onClick={() => setModalIsOpen(true)}>북극곰 개체수</button>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            API 내용 담을 모달
            <button onClick={() => setModalIsOpen(false)}>X</button>
          </Modal>
        </div>
      </StyledSlider>
    </div>
  );
}

export default ApiPage;