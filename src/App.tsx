import "./App.css";
import BearTrackLogo from "./Vector.svg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function App() {
  return (
    <>
      <div className="nav"></div>
      <div className="entryBlock">
        <img src={BearTrackLogo} className="logo" alt="bear" />
        <div className="welcomeMessage">
          <h1>BearTrack</h1>
          <h2>Establish habits. Track the bear.</h2>
        </div>
        <div className="userInfo"></div>
        <ArrowDownwardIcon className="arrowIcon" />
      </div>
    </>
  );
}

export default App;
