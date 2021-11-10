import React, { useState } from "react";
import Modal from "react-modal";

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>모달 열기</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        역시 모달은 라이브러리지
        <button onClick={() => setModalIsOpen(false)}>모달 닫기 버튼</button>
      </Modal>
    </>
  );
}

Modal.setAppElement("#root");
