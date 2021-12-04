import { useEffect, useState } from "react";
import "./styles.css";
import check from "./images/check.svg";
import gear from "./images/gear.svg";

const SECONDS_IN_MINUTE = 60;
const RADIUS = 254;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Day_01_Page = () => {
  const [intervalId, setIntervalId] = useState<number>(0);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [form, setForm] = useState<{ minutes: string; seconds: string }>({
    minutes: "15",
    seconds: "00",
  });
  useEffect(() => {
    document.title = "Day 1";
  }, []);

  const toggleTimer = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const startTimer = () => {
    setIsRunning(true);
    let MINUTES = parseInt(form.minutes);
    let SECONDS = parseInt(form.seconds);

    if (isNaN(MINUTES) || isNaN(SECONDS) || (MINUTES === 0 && SECONDS === 0)) {
      setForm({ minutes: "15", seconds: "00" });
      setIsRunning(false);
      alert("Invalid values");
      return;
    }
    const TOTAL_SECONDS = MINUTES * SECONDS_IN_MINUTE + SECONDS;
    let remainingSeconds = TOTAL_SECONDS;

    const addLeadingZeroes = (value: number) => {
      return value.toString().padStart(2, "0");
    };
    const calculateMinutes = (remainingSeconds: number) => {
      return Math.trunc(remainingSeconds / SECONDS_IN_MINUTE);
    };
    const calculateSeconds = (remainingSeconds: number) => {
      return remainingSeconds % SECONDS_IN_MINUTE;
    };

    setForm({
      minutes: addLeadingZeroes(calculateMinutes(remainingSeconds)),
      seconds: addLeadingZeroes(calculateSeconds(remainingSeconds)),
    });
    setOffset(CIRCUMFERENCE * (1 - remainingSeconds / TOTAL_SECONDS));

    const intervalId = setInterval(() => {
      remainingSeconds--;
      setForm({
        minutes: addLeadingZeroes(calculateMinutes(remainingSeconds)),
        seconds: addLeadingZeroes(calculateSeconds(remainingSeconds)),
      });
      setOffset(CIRCUMFERENCE * (1 - remainingSeconds / TOTAL_SECONDS));

      if (remainingSeconds <= 0) {
        clearInterval(intervalId);
        stopTimer();
        return;
      }
    }, 1000);

    setIntervalId(intervalId);
  };
  const stopTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setOffset(0);
  };

  const toggleEdition = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="wrapper">
      <div className={`ring ${isRunning ? "ending" : ""}`}>
        <svg width="518" height="518" viewBox="0 0 518 518">
          <circle
            strokeWidth="9px"
            x="0"
            y="y"
            cx="259"
            cy="259"
            r={RADIUS}
            strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
            strokeDashoffset={offset}
          />
        </svg>
      </div>

      <div className="timer">
        <div className="time">
          <div className="minutes">
            <input
              type="text"
              value={form.minutes}
              onChange={(e) =>
                setForm((x) => ({ ...x, minutes: e.target.value }))
              }
              disabled={!isEditing}
            />
          </div>

          <div className="colon">:</div>

          <div className="seconds">
            <input
              type="text"
              value={form.seconds}
              onChange={(e) =>
                setForm((x) => ({ ...x, seconds: e.target.value }))
              }
              disabled={!isEditing}
            />
          </div>
        </div>

        {!isEditing && (
          <button className="start" onClick={toggleTimer}>
            {isRunning ? "Stop" : "start"}
          </button>
        )}

        <button className="settings" onClick={toggleEdition}>
          <img src={isEditing ? check : gear} alt="Settings" />
        </button>
      </div>
    </div>
  );
};

export default Day_01_Page;
