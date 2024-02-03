import { Link } from "react-router-dom";
import BackgroundImage from "../Component/LoadingBackground";
import "./NotLoginPage.css";

function NotLogin() {
  const loginClick = function () {
    console.log("login");
  };

  return (
    <div>
      <BackgroundImage />
      <div className="notlogin-container">
        <div></div>
        <div></div>
        <div>
          <p className="notlogin-text">
            간편하게 로그인하고
            <br />
            지금바로 시작하세요.
          </p>
        </div>
        <div></div>
        <div>
          <div className="notlogin-kakao-image">
            <img
              src={`${process.env.PUBLIC_URL}/Imgs/kakaoLogin.png`}
              onClick={loginClick}
            />
          </div>
          <div className="notlogin-problem-text">
            <Link to="/login/help" className="notlogin-problem-text">
              문제가 발생했나요?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotLogin;
