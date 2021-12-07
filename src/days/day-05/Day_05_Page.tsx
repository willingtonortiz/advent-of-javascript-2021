import { useEffect, useState } from "react";
import styled from "styled-components";
import episodes from "./assets/data/episodes";

// Assets
import checkboxChecked from "./assets/images/checkbox--checked.svg";
import checkboxUnchecked from "./assets/images/checkbox--unchecked.svg";
import podcastCover from "./assets/images/podcast-cover.png";

const EPISODE_LIST = episodes;

const Body = styled.div`
  background: #f3f3f3;
  color: #4e4e4e;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  font-family: "Nunito Sans", sans-serif;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Cover = styled.div`
  filter: drop-shadow(0px 4px 24px #453f3f);
`;

const Content = styled.div`
  background: white;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  padding: 60px 80px;
  height: 450px;
  overflow-y: scroll;

  & h1 {
    font-weight: bold;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #a7a7a7;
    margin: 0 0 40px 0;
    padding: 0;
  }

  & input[type="checkbox"] {
    display: none;
  }

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  & li {
    user-select: none;
    margin-bottom: 24px;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  & li:hover {
    background-color: #eeeeee;
  }

  & label {
    cursor: pointer;
  }

  & input[type="checkbox"] + span {
    background: url(${checkboxUnchecked}) left top no-repeat;
    background-size: 20px 20px;
    min-height: 20px;
    padding-left: 30px;
  }

  & input[type="checkbox"]:checked + span {
    background-image: url(${checkboxChecked});
    text-decoration: line-through;
    color: #c9cdd1;
  }

  & button {
    background: #8c59ff;
    border: none;
    border-radius: 24px;
    text-transform: uppercase;
    font-family: "Nunito Sans", sans-serif;
    font-weight: bold;
    padding: 8px 25px;
    color: white;
    line-height: 1;
    letter-spacing: 2px;
    cursor: pointer;
  }

  & button:hover {
    background: #543599;
  }
`;

const Day_05_Page = () => {
  const [holding, setHolding] = useState(false);
  const [startId, setStartId] = useState(-1);
  const [episodes, setEpisodes] = useState(
    EPISODE_LIST.map((x) => ({ ...x, checked: false }))
  );

  useEffect(() => {
    document.title = "AOJ 2021 - Day 5";
  }, []);

  useEffect(() => {
    console.log("SETTED");

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [holding]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Shift" || holding) {
      return;
    }
    setHolding(true);
  };

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key !== "Shift" || !holding) {
      return;
    }
    setHolding(false);
  };

  const onCheckedChange = (id: number, checked: boolean) => {
    if (!checked) {
      setStartId(-1);
    }

    if (holding && startId !== id && startId > -1) {
      const stopId = id;
      // 1 -> 5 => (a - b + 1)
      // 5 -> 1 => (a - b + 1)

      const range = Math.abs(startId - stopId) + 1;
      const increment = startId > stopId ? -1 : +1;

      const ids = Array.from({ length: range }).map(
        (_, index) => startId + increment * index
      );

      updateChecked(ids, true);
      setStartId(-1);
      return;
    }

    updateChecked([id], checked);
    setStartId(id);
  };

  const updateChecked = (ids: number[], checked: boolean) => {
    setEpisodes((state) =>
      state.map((x) => {
        if (ids.includes(x.id)) {
          return { ...x, checked };
        }

        return x;
      })
    );
  };

  return (
    <Body>
      <Wrapper>
        <Cover>
          <img src={podcastCover} alt="Compressed.fm" />
        </Cover>

        <Content>
          <h1>Listen to all the Compressed.fm Episodes</h1>
          <h1>HOLDING {holding ? "TRUE" : "FALSE"}</h1>

          <ul>
            {episodes.map((x) => (
              <li key={x.id}>
                <label
                  htmlFor={`episode-${x.id}`}
                  // onClick={() => onCheckedChange(x.id, !x.checked)}
                >
                  <input
                    id={`episode-${x.id}`}
                    name={`episode-${x.id}`}
                    type="checkbox"
                    checked={x.checked}
                    onChange={(e) => onCheckedChange(x.id, e.target.checked)}
                  />

                  <span>
                    {x.id} || {x.name}
                  </span>
                </label>
              </li>
            ))}
          </ul>

          <button>Mark as Played</button>
        </Content>
      </Wrapper>
    </Body>
  );
};

export default Day_05_Page;
