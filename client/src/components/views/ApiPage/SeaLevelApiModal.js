// issue: 첫번째 모달은 주변이 불투명하게 되는데 두번째 꺼부터는 그냥 하얗게 보임.
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-grow: row;
  flex-wrap: nowrap;
  float: left;
  border: 1px solid blue;
`;

export default function WeatherApiModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>해수면 높이</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Container>{/* 여기에는 쓰고 싶은 데이터 넣기*/}</Container>
        <button onClick={() => setModalIsOpen(false)}>X 모달 닫기 X</button>
      </Modal>
    </>
  );
}

Modal.setAppElement("#root");
