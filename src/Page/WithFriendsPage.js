import { Link, useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import "./WithFriendsPage.css";

const friends = [
  {
    id: 1,
    nickname: "w99_hyun_",
    gender: "남",
    age: "26",
  },
  {
    id: 2,
    nickname: "JIPDANJISUNG",
    gender: "여",
    age: "24",
  },
  {
    id: 1,
    nickname: "w99_hyun_",
    gender: "남",
    age: "26",
  },
  {
    id: 2,
    nickname: "JIPDANJISUNG",
    gender: "여",
    age: "24",
  },
  {
    id: 1,
    nickname: "w99_hyun_",
    gender: "남",
    age: "26",
  },
  {
    id: 2,
    nickname: "JIPDANJISUNG",
    gender: "여",
    age: "24",
  },
  {
    id: 1,
    nickname: "w99_hyun_",
    gender: "남",
    age: "26",
  },
  {
    id: 2,
    nickname: "JIPDANJISUNG",
    gender: "여",
    age: "24",
  },
  {
    id: 1,
    nickname: "w99_hyun_",
    gender: "남",
    age: "26",
  },
  {
    id: 2,
    nickname: "JIPDANJISUNG",
    gender: "여",
    age: "24",
  },
];

function WithFriends() {
  const isZero = friends.length === 0;
  const navigate = useNavigate();
  const backButton = function () {
    navigate("/yeslogin");
  };

  return (
    <div>
      <Header />
      <div className="withfriends-header">
        <div>
          <span className="withfriends-text">친구목록</span>
        </div>
        <div></div>
        <div>
          <button className="simple-plus-button">간편친구추가</button>
        </div>
      </div>

      <div className="withfriends-container">
        <div className="friends-list">
          {!isZero
            ? friends.map((friend) => (
                <div key={friend.id} className="friends-item">
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/Imgs/수컷냥.png`}
                      className=""
                    />
                  </div>
                  <div>
                    <div className="friend-info">
                      <div>
                        <p className="friend-nickname">{friend.nickname}님</p>
                        <p className="friend-details">
                          {friend.age}/{friend.gender}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="gogo">{">"}</span>
                  </div>
                </div>
              ))
            : "아직 등록된 친구가 없어요. 카카오톡으로 간편하게 등록하세요."}
        </div>
        <div>
          <button className="kakao-button1">카카오톡으로 초대하기</button>
        </div>
      </div>
    </div>
  );
}

export default WithFriends;
