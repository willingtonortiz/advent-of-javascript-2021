import { Route, Routes } from "react-router";

import HomePage from "./components/HomePage";
import Day_01_Page from "./days/day_01/Day_01_Page";
import Day_02_Page from "./days/day_02/Day_02_Page";
import Day_03_Page from "./days/day_03/Day_03_Page";
import Day_04_Page from "./days/day_04/Day_04_Page";
import Day_05_Page from "./days/day-05/Day_05_Page";
import Day_06_Page from "./days/day-06/Day_06_Page";
import Day_07_Page from "./days/day-07/Day_07_Page";
import Day_08_Page from "./days/day-08/Day_08_Page";
import Day_09_Page from "./days/day-09/Day_09_Page";
import Day_10_Page from "./days/day-10/Day_10_Page";
import Day_11_Page from "./days/day-11/Day_11_Page";
import Day_12_Page from "./days/day-12/Day_12_Page";
import Day_13_Page from "./days/day-13/Day_13_Page";
import Day_14_Page from "./days/day-14/Day_14_Page";
import Day_15_Page from "./days/day-15/Day_15_Page";
import Day_16_Page from "./days/day-16/Day_16_Page";
import Day_17_Page from "./days/day-17/Day_18_Page";
import Day_18_Page from "./days/day-18/Day_18_Page";
import Day_19_Page from "./days/day-19/Day_19_Page";
import Day_20_Page from "./days/day-20/Day_20_Page";
import Day_21_Page from "./days/day-21/Day_21_Page";
import Day_22_Page from "./days/day-21/Day_21_Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="day-01" element={<Day_01_Page />}></Route>
      <Route path="day-02" element={<Day_02_Page />}></Route>
      <Route path="day-03" element={<Day_03_Page />}></Route>
      <Route path="day-04" element={<Day_04_Page />}></Route>
      <Route path="day-05" element={<Day_05_Page />}></Route>
      <Route path="day-06" element={<Day_06_Page />}></Route>
      <Route path="day-07" element={<Day_07_Page />}></Route>
      <Route path="day-08" element={<Day_08_Page />}></Route>
      <Route path="day-09" element={<Day_09_Page />}></Route>
      <Route path="day-10" element={<Day_10_Page />}></Route>
      <Route path="day-11" element={<Day_11_Page />}></Route>
      <Route path="day-12" element={<Day_12_Page />}></Route>
      <Route path="day-13" element={<Day_13_Page />}></Route>
      <Route path="day-14" element={<Day_14_Page />}></Route>
      <Route path="day-15" element={<Day_15_Page />}></Route>
      <Route path="day-16" element={<Day_16_Page />}></Route>
      <Route path="day-17" element={<Day_17_Page />}></Route>
      <Route path="day-18" element={<Day_18_Page />}></Route>
      <Route path="day-19" element={<Day_19_Page />}></Route>
      <Route path="day-20" element={<Day_20_Page />}></Route>
      <Route path="day-21" element={<Day_21_Page />}></Route>
      <Route path="day-22" element={<Day_22_Page />}></Route>
    </Routes>
  );
}

export default App;
