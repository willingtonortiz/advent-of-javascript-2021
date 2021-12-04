import { Route, Routes } from "react-router";

import HomePage from "./components/HomePage";
import Day_01_Page from "./days/day_01/Day_01_Page";
import Day_02_Page from "./days/day_02/Day_02_Page";
import Day_03_Page from "./days/day_03/Day_03_Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="day-01" element={<Day_01_Page />} />
        <Route path="day-02" element={<Day_02_Page />} />
        <Route path="day-03" element={<Day_03_Page />} />
      </Routes>
    </>
  );
}

export default App;
