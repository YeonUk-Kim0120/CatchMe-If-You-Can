import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotLogin from "./Page/NotLoginPage";
import YesLogin from "./Page/YesLoginPage";
import Loading from "./Page/LoadingPage";
import Help from "./Page/HelpPage";
import Alarm from "./Page/AlarmPage";
import WithFriends from "./Page/WithFriendsPage";
import MatchHistory from "./Page/MatchHistoryPage";
import MyPage from "./Page/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/notlogin" element={<NotLogin />} />
        <Route path="/login" element={<YesLogin />} />
        <Route path="/login/mypage" element={<MyPage />} />
        <Route path="/login/withfriends" element={<WithFriends />} />
        <Route path="/login/help" element={<Help />} />
        <Route path="/login/matchhistory" element={<MatchHistory />} />
        <Route path="/login/alarm" element={<Alarm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
