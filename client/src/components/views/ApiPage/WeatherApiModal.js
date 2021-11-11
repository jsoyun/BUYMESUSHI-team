// issue: 첫번째 모달은 주변이 불투명하게 되는데 두번째 꺼부터는 그냥 하얗게 보임.
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Axios from 'axios';
import styled from 'styled-components';
import FineDustItem from "./ApiItem";

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
  const [finedust, setFineDust] = useState([]);

  useEffect(() => {
    const getFineDust = async () => {
      const res = await Axios.get(
        "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=서울&pageNo=1&numOfRows=100&returnType=xml&serviceKey=yK3/i2ehf6e71nk0RhR1tVLp829kB2EZH5oFOXGz61gbTLWhHPWBYxSDni9y7OU98/FaHBI5WE5qLOPXWTsDrg==&ver=1.0"
      );
      setFineDust(res.data.finedust);
      console.log(res);
    };
    getFineDust();
  }, []);

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>모달 열기</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Container>
          {/* 여기에는 쓰고 싶은 데이터 넣기*/}
          {finedust.map(({ pm10Value, pm25Value, stationName }) => (
            <FineDustItem
              pm10Value={pm10Value}
              pm25Value={pm25Value}
              stationName={stationName}
            />
          ))}
        </Container>


        API 내용 담기



        <button onClick={() => setModalIsOpen(false)}>X 모달 닫기 X</button>
      </Modal>
    </>
  );
}

Modal.setAppElement("#root");
