import { useEffect, useState } from "react";
import styled from "styled-components";
import "./styles.css";
import check from "./images/check.svg";
import gear from "./images/gear.svg";

const SECONDS_IN_MINUTE = 60;
const RADIUS = 254;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Body = styled.div`
  align-items: center;
  background: #2b2a30;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  padding: 0;
`;

const Wrapper = styled.div`
  align-items: center;
  border-radius: 50%;
  box-shadow: -5px 14px 44px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15);
  display: flex;
  height: 518px;
  justify-content: center;
  position: relative;
  width: 518px;
`;

const Timer = styled.div`
  align-items: center;
  background: radial-gradient(
    71.4% 71.4% at 51.7% 28.6%,
    #3a393f 0%,
    #17171a 100%
  );
  border-radius: 50%;
  box-shadow: inset 0px 0px 114px rgba(0, 0, 0, 0.45);
  color: white;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  position: relative;
  width: 500px;
  z-index: 2;
`;

const Time = styled.div`
  display: flex;
  font-family: "bebas";
  font-size: 196px;
  margin: 30px auto;
  position: relative;
  top: 30px;
`;

const TextInput = styled.input`
  border: 0;
  border-bottom: 1px dashed white;
  background: none;
  color: white;
  font-family: "bebas";
  font-size: 196px;
  height: 170px;
  width: 150px;
  text-align: center;
  outline: none;

  &:disabled {
    border-bottom: none;
  }
`;

const StartButton = styled.button`
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  letter-spacing: 10px;
  line-height: 20px;
  background: none;
  color: white;
  opacity: 0.5;
  border: none;
  text-transform: uppercase;
  margin-bottom: 20px;

  &:hover {
    opacity: 1;
  }
`;

const SettingsButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
`;

const Ring = styled.div`
  transform: rotate(90deg);
  position: absolute;
  left: 0;
  stroke: #09a65a;
  top: 0;
  z-index: 1;

  &.ending circle {
    stroke: #900a0a;
  }
`;

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
    document.title = "AOJ 2021 - Day 1";
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
    <Body>
      <Wrapper>
        <Ring className={`${isRunning ? "ending" : ""}`}>
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
        </Ring>

        <Timer>
          <Time>
            <div className="minutes">
              <TextInput
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
              <TextInput
                type="text"
                value={form.seconds}
                onChange={(e) =>
                  setForm((x) => ({ ...x, seconds: e.target.value }))
                }
                disabled={!isEditing}
              />
            </div>
          </Time>

          {!isEditing && (
            <StartButton onClick={toggleTimer}>
              {isRunning ? "Stop" : "start"}
            </StartButton>
          )}

          <SettingsButton onClick={toggleEdition}>
            <img src={isEditing ? check : gear} alt="Settings" />
          </SettingsButton>
        </Timer>
      </Wrapper>
    </Body>
  );
};

export default Day_01_Page;
