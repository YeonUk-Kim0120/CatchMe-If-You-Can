import React from "react";
import Header from "../Component/Header";
import "./AlarmPage.css"; // CSS 파일을 임포트합니다.
import { useNavigate } from "react-router-dom";
<div className="withfriends-header">
  <span className="withfriends-text">매칭 목록</span>
</div>;
const notifications = [
  {
    id: 1,
    message: "___eve 님의 이상형과 76% 일치하는 사람이 활동중이에요.",
    time: "지금",
  },
  { id: 2, message: "3,000 코인 충전이 완료되었습니다.", time: "1분 전" },
  {
    id: 3,
    message: "___eve 님의 이상형과 43% 일치하는 사람이 활동중이에요.",
    time: "20분 전",
  },
  {
    id: 4,
    message: "___eve 님의 이상형과 98% 일치하는 사람이 활동중이에요.",
    time: "25분 전",
  },
  {
    id: 5,
    message: "___eve 님의 이상형과 98% 일치하는 사람이 활동중이에요.",
    time: "25분 전",
  },
  {
    id: 6,
    message: "___eve 님의 이상형과 98% 일치하는 사람이 활동중이에요.",
    time: "25분 전",
  },
  {
    id: 7,
    message: "___eve 님의 이상형과 98% 일치하는 사람이 활동중이에요.",
    time: "25분 전",
  },
  {
    id: 8,
    message: "___eve 님의 이상형과 98% 일치하는 사람이 활동중이에요.",
    time: "25분 전",
  },
  {
    id: 9,
    message: "___eve 님의 이상형과 98% 일치하는 사람이 활동중이에요.",
    time: "25분 전",
  },
  {
    id: 10,
    message: "___eve 님의 이상형과 98% 일치하는 사람이 활동중이에요.",
    time: "25분 전",
  },
  {
    id: 11,
    message: "___eve 님의 이상형과 98% 일치하는 사람이 활동중이에요.",
    time: "25분 전",
  },
  {
    id: 12,
    message: "das 이상형과 98% 일치하는 사람이 활동중이에요.",
    time: "25분 전",
  },
];

function Alarm() {
  const isZero = notifications.length === 0;
  return (
    <div>
      <Header />
      <div className="alarm-header">
        <span className="alarm-text">알림</span>
      </div>
      <div className="notifications-container">
        <div className="notification-list">
          {!isZero
            ? notifications.map((notification) => (
                <div key={notification.id} className="notification-item">
                  <p>{notification.message}</p>
                  <span className="time">{notification.time}</span>
                </div>
              ))
            : "현재 알림이 없습니다."}
        </div>
      </div>
    </div>
  );
}

export default Alarm;
