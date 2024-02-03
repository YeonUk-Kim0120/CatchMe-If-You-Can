import "./LoginHeader.css";
import { useNavigate } from "react-router-dom";

function LoginHeader() {
  const navigate = useNavigate();

  const alarmClick = function () {
    navigate("/login/alarm");
  };
  const menuClick = function () {
    //modal 띄위기
  };
  return (
    <div className="loginheader-container">
      <div className="loginheader-logo">
        <img
          src={`${process.env.PUBLIC_URL}/Imgs/Logo.png`}
          className="loginheader-logo"
        />
      </div>
      <div className="loginheader-alarm">
        <img
          src={`${process.env.PUBLIC_URL}/Imgs/alarmIcon.png`}
          className="loginheader-alarm"
          onClick={alarmClick}
        />
      </div>
      <div className="loginheader-menu">
        <img
          src={`${process.env.PUBLIC_URL}/Imgs/menuIcon.png`}
          className="loginheader-menu"
        />
      </div>
    </div>
  );
}

export default LoginHeader;
