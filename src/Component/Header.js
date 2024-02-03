import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const backButton = function () {
    navigate("/login");
  };
  const alarmClick = function () {
    navigate("/login/alarm");
  };
  const menuClick = function () {
    //modal 띄위기
  };
  return (
    <div className="header-container">
      <div onClick={backButton} className="header-middle">
        <img
          src={`${process.env.PUBLIC_URL}/Imgs/PinkArrow.png`}
          className="header-arrow"
        />
      </div>

      <div></div>

      <div className="header-middle">
        <img
          src={`${process.env.PUBLIC_URL}/Imgs/Logo.png`}
          className="header-logo"
        />
      </div>

      <div onClick={alarmClick} className="header-middle">
        <img
          src={`${process.env.PUBLIC_URL}/Imgs/PinkAlarm.png`}
          className="header-alarm"
        />
      </div>

      <div onClick={menuClick} className="header-middle">
        <img
          src={`${process.env.PUBLIC_URL}/Imgs/pinkMenuIcon.png`}
          className="header-menu"
        />
      </div>
    </div>
  );
}

export default Header;
