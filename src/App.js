import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegistrationPage from "./Components/RegistrationPage";
import SignInPage from "./Components/SignInPage";
import HomePage from "./Components/HomePage";
import GoalsPage from "./Components/GoalsPage";
import Taskbar from "./constants/Taskbar";
import WorkoutTracker from "./Components/WorkoutTracker";
import WorkoutSchedule from "./Components/WorkoutSchedule";
import SkipPage from "./Components/SkipPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/workout-tracker" element={<WorkoutTracker />} />
          <Route path="/workout-schedule" element={<WorkoutSchedule />} />
          <Route path="/skip" element={<SkipPage />} />
        </Routes>
        {/* <Taskbar /> */}
      </div>
    </Router>
  );
}

export default App;
