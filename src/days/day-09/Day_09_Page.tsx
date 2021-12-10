import { useEffect, useState } from "react";
import styled from "styled-components";

import chevron from "./assets/images/chevron.svg";
import { content } from "./assets/data/content";

const CONTENT = content;

const Body = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
  font-family: "Roboto Mono", monospace;
  padding: 0;
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Feature = styled.div`
  padding-bottom: 200px; /* offset thumbnail strip at the bottom */

  & img {
    max-height: 615px;
    max-width: 800px;
  }
`;

const Thumbnails = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  overflow-x: scroll;
  scroll-padding: 0 100px;
  scroll-snap-type: both mandatory;

  & ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 30px;
    position: relative;
    padding: 0 100px;
  }

  & li:last-child img {
    margin-right: 100px;
  }

  & li {
    scroll-snap-align: start;
    scroll-snap-stop: normal;
  }

  & .selected {
    outline: 10px solid #ff00c7;
    outline-offset: -10px;
  }

  & img {
    object-fit: cover;
    height: 175px;
    width: 175px;
    vertical-align: middle;
  }
`;

const CarouselButton = styled.button`
  background: rgba(255, 0, 199, 0.3);
  width: 100px;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
  box-sizing: border-box;

  &:hover {
    background: rgba(255, 0, 199, 1);
  }
`;

const CarouselLeft = styled(CarouselButton)`
  left: 0;
`;

const CarouselRight = styled(CarouselButton)`
  right: 0;

  & img {
    transform: rotate(180deg);
    margin: auto;
  }
`;

const Day_09_Page = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(CONTENT[0]);

  useEffect(() => {
    document.title = "AOJ 2021 - Day 9";
  }, []);

  useEffect(() => {
    setSelectedImage(CONTENT[selectedIndex]);
  }, [selectedIndex]);

  const selectNextImage = () => {
    if (selectedIndex + 1 >= CONTENT.length) {
      return;
    }

    setSelectedIndex(selectedIndex + 1);
  };
  const selectPreviousImage = () => {
    if (selectedIndex - 1 < 0) {
      return;
    }

    setSelectedIndex(selectedIndex - 1);
  };

  return (
    <Body>
      <Feature>
        <img src={selectedImage.image} alt="Featured" />

        <div className="caption">{selectedImage.caption}</div>
      </Feature>

      <CarouselLeft onClick={() => selectPreviousImage()}>
        <img src={chevron} alt="chevron" />
      </CarouselLeft>

      <CarouselRight onClick={() => selectNextImage()}>
        <img src={chevron} alt="chevron" />
      </CarouselRight>

      <Thumbnails>
        <ul>
          {CONTENT.map((x, index) => (
            <li key={index} onClick={() => setSelectedImage(x)}>
              <a href="#">
                <img src={x.image} alt={x.caption} />
              </a>
            </li>
          ))}
        </ul>
      </Thumbnails>
    </Body>
  );
};

export default Day_09_Page;
