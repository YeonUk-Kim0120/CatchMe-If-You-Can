import React, { useState } from "react";
import Modal from "react-modal";
import "./MenuModal.css";
import a from "./Header";

function MenuModal() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const customStyles = {
    content: {
      top: "0", // 세로 방향에서 화면 꼭대기에 위치
      left: "30%", // 가로 방향에서 화면의 중앙에 위치
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, 0)", // 중앙 정렬을 위한 변환
      width: "50%", // 모달의 가로 크기는 화면의 50%
      height: "100%", // 모달의 세로 크기는 화면의 100%
    },
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {"모달~"}
        <h2>Hello</h2>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default MenuModal;
{
  /* <button onClick={() => setModalIsOpen(true)}>Modal Open</button> */
}
