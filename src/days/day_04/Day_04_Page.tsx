import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Body = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  padding: 0;
`;

const Header = styled.h1`
  color: #60c1b6;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 0.75rem;
  text-align: center;
  position: absolute;
  top: -50px;
  left: 50%;
  width: 100vw;
  transform: translateX(-50%);
`;

const Keyboard = styled.div`
  background: #f6f6f6;
  padding: 45px 50px;
  border-radius: 50px;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  width: 1110px;
`;

const Key = styled.button`
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 16px;
  color: #60c1b6;
  cursor: pointer;
  display: flex;
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  justify-content: center;
  min-width: 65px;
  align-items: center;
  padding: 18px 24px;
  height: 65px;
  box-sizing: border-box;

  &:hover {
    background: #ffd200;
    color: black;
  }

  &.utility {
    color: #868888;
    flex: auto;
  }

  &.jiggle {
    animation: jiggle 1s;
    animation-iteration-count: infinite;
    background: #60c1b6;
    color: white;
  }

  @keyframes jiggle {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

const keyboardKeys = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "BACKSPACE",
  "TAB",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[",
  "]",
  "\\",
  "CAPSLOCK",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  "'",
  "ENTER",
  "SHIFT",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  ",",
  ".",
  "/",
  "SHIFT",
];

const generateRandomKey = () => {
  const size = keyboardKeys.length;
  const random = Math.round(Math.random() * size - 1);
  const randomKey = keyboardKeys[random];
  return randomKey;
};
const INITIAL_KEY = generateRandomKey();

const Day_04_Page = () => {
  const [currentKey, setCurrentKey] = useState<string>(INITIAL_KEY);

  useEffect(() => {
    document.title = "AOJ 2021 - Day 4";
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [currentKey]);

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key.toUpperCase() === currentKey) {
      const newKey = generateRandomKey();
      setCurrentKey(newKey);
    }
  };

  return (
    <Body>
      <Keyboard>
        <Header>Eyes on the Screen</Header>

        <Row>
          <Key className={currentKey === "`" ? "jiggle" : ""} data-key="`">
            `
          </Key>
          <Key className={currentKey === "1" ? "jiggle" : ""} data-key="1">
            1
          </Key>
          <Key className={currentKey === "2" ? "jiggle" : ""} data-key="2">
            2
          </Key>
          <Key className={currentKey === "3" ? "jiggle" : ""} data-key="3">
            3
          </Key>
          <Key className={currentKey === "4" ? "jiggle" : ""} data-key="4">
            4
          </Key>
          <Key className={currentKey === "5" ? "jiggle" : ""} data-key="5">
            5
          </Key>
          <Key className={currentKey === "6" ? "jiggle" : ""} data-key="6">
            6
          </Key>
          <Key className={currentKey === "7" ? "jiggle" : ""} data-key="7">
            7
          </Key>
          <Key className={currentKey === "8" ? "jiggle" : ""} data-key="8">
            8
          </Key>
          <Key className={currentKey === "9" ? "jiggle" : ""} data-key="9">
            9
          </Key>
          <Key className={currentKey === "0" ? "jiggle" : ""} data-key="0">
            0
          </Key>
          <Key className={currentKey === "-" ? "jiggle" : ""} data-key="-">
            -
          </Key>
          <Key className={currentKey === "=" ? "jiggle" : ""} data-key="=">
            =
          </Key>
          <Key
            className={currentKey === "BACKSPACE" ? "jiggle" : ""}
            data-key="BACKSPACE"
          >
            DEL
          </Key>
        </Row>

        <Row>
          <Key
            className={`utility ${currentKey === "TAB" ? "jiggle" : ""}`}
            data-key="TAB"
          >
            Tab
          </Key>
          <Key className={currentKey === "Q" ? "jiggle" : ""} data-key="Q">
            Q
          </Key>
          <Key className={currentKey === "W" ? "jiggle" : ""} data-key="W">
            W
          </Key>
          <Key className={currentKey === "E" ? "jiggle" : ""} data-key="E">
            E
          </Key>
          <Key className={currentKey === "R" ? "jiggle" : ""} data-key="R">
            R
          </Key>
          <Key className={currentKey === "T" ? "jiggle" : ""} data-key="T">
            T
          </Key>
          <Key className={currentKey === "Y" ? "jiggle" : ""} data-key="Y">
            Y
          </Key>
          <Key className={currentKey === "U" ? "jiggle" : ""} data-key="U">
            U
          </Key>
          <Key className={currentKey === "I" ? "jiggle" : ""} data-key="I">
            I
          </Key>
          <Key className={currentKey === "O" ? "jiggle" : ""} data-key="O">
            O
          </Key>
          <Key className={currentKey === "P" ? "jiggle" : ""} data-key="P">
            P
          </Key>
          <Key className={currentKey === "[" ? "jiggle" : ""} data-key="[">
            [
          </Key>
          <Key className={currentKey === "]" ? "jiggle" : ""} data-key="]">
            ]
          </Key>
          <Key className={currentKey === "\\" ? "jiggle" : ""} data-key="\">
            \
          </Key>
        </Row>

        <Row>
          <Key
            className={`utility ${currentKey === "CAPSLOCK" ? "jiggle" : ""}`}
            data-key="CAPSLOCK"
          >
            CAPS
          </Key>
          <Key className={currentKey === "A" ? "jiggle" : ""} data-key="A">
            A
          </Key>
          <Key className={currentKey === "S" ? "jiggle" : ""} data-key="S">
            S
          </Key>
          <Key className={currentKey === "D" ? "jiggle" : ""} data-key="D">
            D
          </Key>
          <Key className={currentKey === "F" ? "jiggle" : ""} data-key="F">
            F
          </Key>
          <Key className={currentKey === "G" ? "jiggle" : ""} data-key="G">
            G
          </Key>
          <Key className={currentKey === "H" ? "jiggle" : ""} data-key="H">
            H
          </Key>
          <Key className={currentKey === "J" ? "jiggle" : ""} data-key="J">
            J
          </Key>
          <Key className={currentKey === "K" ? "jiggle" : ""} data-key="K">
            K
          </Key>
          <Key className={currentKey === "L" ? "jiggle" : ""} data-key="L">
            L
          </Key>
          <Key className={currentKey === ";" ? "jiggle" : ""} data-key=";">
            ;
          </Key>
          <Key className={currentKey === "'" ? "jiggle" : ""} data-key="'">
            '
          </Key>
          <Key
            className={`utility ${currentKey === "ENTER" ? "jiggle" : ""}`}
            data-key="ENTER"
          >
            ENTER
          </Key>
        </Row>

        <Row>
          <Key
            className={`utility ${currentKey === "SHIFT" ? "jiggle" : ""}`}
            data-key="SHIFT"
          >
            SHIFT
          </Key>
          <Key className={currentKey === "Z" ? "jiggle" : ""} data-key="Z">
            Z
          </Key>
          <Key className={currentKey === "X" ? "jiggle" : ""} data-key="X">
            X
          </Key>
          <Key className={currentKey === "C" ? "jiggle" : ""} data-key="C">
            C
          </Key>
          <Key className={currentKey === "V" ? "jiggle" : ""} data-key="V">
            V
          </Key>
          <Key className={currentKey === "B" ? "jiggle" : ""} data-key="B">
            B
          </Key>
          <Key className={currentKey === "N" ? "jiggle" : ""} data-key="N">
            N
          </Key>
          <Key className={currentKey === "M" ? "jiggle" : ""} data-key="M">
            M
          </Key>
          <Key className={currentKey === "," ? "jiggle" : ""} data-key=",">
            ,
          </Key>
          <Key className={currentKey === "." ? "jiggle" : ""} data-key=".">
            .
          </Key>
          <Key className={currentKey === "/" ? "jiggle" : ""} data-key="/">
            /
          </Key>
          <Key
            className={`utility ${currentKey === "SHIFT" ? "jiggle" : ""}`}
            data-key="SHIFT"
          >
            SHIFT
          </Key>
        </Row>
      </Keyboard>
    </Body>
  );
};

export default Day_04_Page;
