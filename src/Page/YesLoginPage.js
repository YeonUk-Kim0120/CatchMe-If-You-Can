import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginHeader from "../Component/LoginHeader";
import BackgroundNone from "../Component/YesLoginBackground";
import "./YesLoginPage.css";
import Modal from "react-modal";

function YesLogin() {
  const userName = "r___eve";
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const MenuModalStyles = {
    content: {
      top: "0", // 세로 방향에서 화면 꼭대기에 위치
      left: "30%", // 가로 방향에서 화면의 중앙에 위치
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, 0)", // 중앙 정렬을 위한 변환
      width: "50%", // 모달의 가로 크기는 화면의 50%
      height: "95%", // 모달의 세로 크기는 화면의 100%
    },
  };

  const menuClick = function () {
    setModalIsOpen(true);
  };
  return (
    <>
      <BackgroundNone />
      <LoginHeader />
      <div className="yeslogin-container">
        <div></div>
        <div className="yeslogin-wellcome-text">{`어서오세요!! ${userName}님.`}</div>
        <div></div>
        <div></div>
        <div className="yeslogin-btn">
          <button className="yeslogin-start-button">지금 시작하기</button>
        </div>
        <div className="yeslogin-logout-text">
          <Link to="/notlogin" className="yeslogin-logout-text">
            LOGOUT
          </Link>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={MenuModalStyles}
        contentLabel="Example Modal"
        className="modal-slide-in container-modal"
      >
        <div className="x-icon">
          <img
            src={`${process.env.PUBLIC_URL}/Imgs/xIcon.png`}
            className="x-icon"
            onClick={() => setModalIsOpen(false)}
          />
        </div>
        <div className="modal-text">
          <Link to="/login/mypage" className="modal-text">
            my page.
          </Link>
        </div>
        <div className="modal-text">
          <Link to="/login/withfriends" className="modal-text">
            whth friends.
          </Link>
        </div>
        <div className="modal-text">
          <Link to="/login/matchhistory" className="modal-text">
            match history.
          </Link>
        </div>
        <div className="modal-text">
          <Link to="/login/help" className="modal-text">
            help.
          </Link>
        </div>
        <div className="modal-text">
          <Link to="https://www.instagram.com/" className="modal-text">
            about us.
          </Link>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="modal-text-team">JIPDANJISUNG</div>
      </Modal>
    </>
  );
}

export default YesLogin;
