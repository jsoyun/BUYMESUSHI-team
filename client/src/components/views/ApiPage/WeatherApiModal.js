// issue: 첫번째 모달은 주변이 불투명하게 되는데 두번째 꺼부터는 그냥 하얗게 보임.
import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import WeatherApiModalItem from './WeatherApiModalItem';

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
      <button onClick={() => setModalIsOpen(true)}>전세계 도시별 날씨</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Container>
          <WeatherApiModalItem />
        </Container>

        <button onClick={() => setModalIsOpen(false)}>X 모달 닫기 X</button>
      </Modal>
    </>
  );
}

Modal.setAppElement("#root");
