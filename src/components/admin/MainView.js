import Navbar from "../utils/Navbar";
import StatisticsView from "./StatisticsView";

export default function MainView() {
  return (
    <div>
      <Navbar />
      <div className="main-container">
      <StatisticsView />
    </div>
    </div>
  );
}
