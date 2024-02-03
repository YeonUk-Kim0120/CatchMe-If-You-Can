<div>
  <div>
    <button>
      {" "}
      <img src="" />{" "}
    </button>{" "}
    {/*로고*/}
    <button>
      {" "}
      <img src="" />{" "}
    </button>{" "}
    {/*벨*/}
    <button onClick={() => setModalIsOpen(true)}>
      {" "}
      <img src="" />{" "}
    </button>{" "}
    {/*메뉴*/}
  </div>
  <div className="wellcome">{`어서오세요! ${userName}님.`}</div>
  <div>
    <Link to="/">
      <button className="start-button">지금 시작하기</button>
    </Link>
    <div className="logout-text">
      <Link to="/" className="logout-text">
        {" "}
        LOGOUT{" "}
      </Link>
    </div>
  </div>

  <Modal isOpen={modalIsOpen}>
    <button onClick={() => setModalIsOpen(false)}>close</button>
    <hr />
    <p className="category-text">
      <Link to="/" className="category-text">
        {" "}
        home
      </Link>
    </p>
    <hr />
    <p>
      <Link to="/"> my page</Link>
    </p>
    <p>
      <Link to="/"> with friends</Link>
    </p>
    <p>
      <Link to="/"> match history</Link>
    </p>
    <p>
      <Link to="/"> help.</Link>
    </p>
  </Modal>
</div>;

import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import "./YesLoginPage.css";

function YesLogin() {
  const userName = "노태일";
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return <div className="comtainer"></div>;
}

export default YesLogin;
{
  /*
div className="explain-box">
          <p className="need-withfriends-text">도움이 필요하신가요?</p>
          <p className="need-withfriends-text2">
            아래의 링크로 알려주시면 <br />
            신속한 확인 및 조치 하겠습니다.
          </p>
        </div>
*/
}

<button onClick={backButton}>
  <img
    src={`${process.env.PUBLIC_URL}/Imgs/arrowIcon.png`}
    className="back-icon"
  />
</button>;

{
  {
    historys.map((history) => (
      <div key={history.id} className="history-item">
        <p>{history.date}</p>
        <span className="time">{history.meeter}</span>
      </div>
    ));
  }

  {
    !isZero
      ? friends.map((history) => (
          <div key={history.id} className="friends-item">
            <div className="history-info">
              <div
                className="avatar"
                style={{
                  backgroundColor:
                    history.gender === "남" ? "purple" : "yellow",
                }}
              ></div>
              <div>
                <p className="history-date">{history.date} 매칭</p>
                <p className="history-nickname">{history.nickname}</p>
                <p className="history-details">
                  {history.gender}/{history.age}/{history.location}
                </p>
              </div>
            </div>
            <div className="history-navigate">
              <span>{">"}</span>
            </div>
          </div>
        ))
      : "아직 등록된 친구가 없어요. 카카오톡으로 간편하게 등록하세요.";
  }
}
