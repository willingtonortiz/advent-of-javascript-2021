import { useEffect, useState } from "react";
import styled from "styled-components";

const Body = styled.div`
  background: #262529;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  font-family: "Source Sans Pro", sans-serif;
`;

const Wrapper = styled.div`
  background: #262529;
  box-shadow: 0px 0px 250px #000000;
  border-radius: 20px;
  padding: 60px 80px;
  text-align: center;

  & button {
    font-family: "Source Sans Pro", sans-serif;
    border: none;
    color: white;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 20px 40px;
    background: #333139;
    border-radius: 100px;
    letter-spacing: 1px;
    cursor: pointer;
  }

  & button:hover {
    background: white;
    color: black;
  }
`;

const RangeSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  border-radius: 10px;
  width: 700px;
  height: 14px;
  background: #4d4c53;
  outline: none;
  margin: 70px 0;

  /* slider handle */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 50px;
    height: 50px;
    background: #ea346f;
    cursor: pointer;
    border-radius: 50%;
    outline: 15px solid rgba(234, 52, 111, 0.2);
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: none; /* firefox needs this */
    width: 50px;
    height: 50px;
    background: #ea346f;
    cursor: pointer;
    border-radius: 50%;
    outline: 15px solid rgba(234, 52, 111, 0.2);
  }

  /* progress (before knob) within Firefox */
  &::-moz-range-progress {
    background: #ea346f;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 14px;
  }
`;

const Amount = styled.div`
  color: #ffc700;
  font-weight: bold;
  font-size: 6rem;
`;

const DollarSign = styled.sup`
  font-size: 5.5rem;
`;

const Day_06_Page = () => {
  const [value, setValue] = useState<number>(5000);

  useEffect(() => {
    document.title = "AOJ 2021 - Day 6";
  }, []);

  return (
    <Body>
      <Wrapper>
        <Amount>
          <DollarSign>$</DollarSign>
          <span className="dollars">{value / 100}</span>
        </Amount>

        <RangeSlider
          type="range"
          id="priceRange"
          min="0"
          max="10000"
          step="1"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        />

        <br />
        <button>Buy Now</button>
        <script src="app.js"></script>
      </Wrapper>
    </Body>
  );
};

export default Day_06_Page;
