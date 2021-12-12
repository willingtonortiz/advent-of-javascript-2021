import { useEffect } from "react";
import styled from "styled-components";
import WeatherSvg from "./components/Weather";

const Body = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Krona+One&family=Oswald&display=swap");
  background: #e9f5fa;
  padding: 0;
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const Day = styled.div`
  color: #4db0d3;
  font-family: "Krona One", sans-serif;
  text-align: center;
`;

const DayOfWeek = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const Date = styled.div`
  font-size: 4.5rem;
`;

const Weather = styled.div`
  position: absolute;
`;

const Bar = styled.div`
  background: var(--background);
  min-height: 425px;
  border-radius: 50px;
  position: relative;
  width: 164px;
  padding-top: 252px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1),
    11px 4px 34px rgba(32, 77, 92, 0.25);

  &.cloudy {
    --background: #4db0d3;
    --temperature: #e6df95;
    --content: #d3ebf4;
  }
  &.cloudy ${Weather} {
    left: -26px;
    top: 77px;
  }

  &.sunny {
    --background: #e6df95;
    --temperature: #4db0d3;
    --content: #247490;
  }
  &.sunny ${Weather} {
    left: -21px;
    top: 20px;
  }

  &.stormy {
    --background: #0e2e3a;
    --temperature: #e6df95;
    --content: #d3ebf4;
  }
  &.stormy ${Weather} {
    left: -21px;
    top: 40px;
  }

  &.snowy {
    --background: #bce1ef;
    --temperature: #0e2e3a;
    --content: #247490;
  }
  &.snowy ${Weather} {
    left: -25px;
    top: 20px;
  }

  &.partly-cloudy {
    --background: #4db0d3;
    --temperature: #e6df95;
    --content: #d3ebf4;
  }
  &.partly-cloudy ${Weather} {
    left: -14px;
    top: 20px;
  }

  &.rainy {
    --background: #2b8bad;
    --temperature: #e6df95;
    --content: #d3ebf4;
  }
  &.rainy ${Weather} {
    left: 31px;
    top: -13px;
  }
`;

const Temperature = styled.div`
  font-family: "Oswald", sans-serif;
  color: var(--temperature);
  font-size: 7rem;
  position: relative;
  padding-bottom: 60px;

  & .degrees {
    position: absolute;
    font-size: 3rem;
    top: 20px;
  }
`;

const Icon = styled.svg`
  fill: currentColor;
  height: 32px;
  width: 32px;
  display: inline-block;
  position: relative;
  top: 10px;
`;

const Precipitation = styled.div`
  margin-bottom: 10px;
`;

const Low = styled.div`
  & .icon {
    left: -3px;
    position: relative;
  }
`;

const Content = styled.div`
  color: var(--content);
`;

const Day_08_Page = () => {
  useEffect(() => {
    document.title = "AOJ 2021 - Day 8";
  }, []);

  return (
    <Body>
      <Wrapper>
        <Day>
          <DayOfWeek>Wed</DayOfWeek>
          <Date>8</Date>
          <Bar className="cloudy">
            <Weather>
              <svg role="img">
                <use
                  xlinkHref="#cloudy"
                  width="264"
                  height="166"
                  viewBox="0 0 264 166"
                ></use>
              </svg>
            </Weather>

            <Temperature>
              72<span className="degrees">&deg;</span>
            </Temperature>

            <Content>
              <Precipitation>
                <Icon role="img">
                  <use xlinkHref="#precipitation"></use>
                </Icon>
                84%
              </Precipitation>

              <Low>
                <Icon role="img">
                  <use xlinkHref="#low"></use>
                </Icon>
                28&deg;
              </Low>
            </Content>
          </Bar>
        </Day>

        <Day>
          <DayOfWeek>Thur</DayOfWeek>
          <Date>9</Date>
          <Bar className="sunny">
            <Weather>
              <svg role="img" width="208" height="213" viewBox="0 0 208 213">
                <use xlinkHref="#sunny"></use>
              </svg>
            </Weather>
            <Temperature>
              65<span className="degrees">&deg;</span>
            </Temperature>
            <Content>
              <Precipitation>
                <Icon role="img">
                  <use xlinkHref="#precipitation"></use>
                </Icon>
                84%
              </Precipitation>
              <Low>
                <Icon role="img">
                  <use xlinkHref="#low"></use>
                </Icon>
                28&deg;
              </Low>
            </Content>
          </Bar>
        </Day>

        <Day>
          <DayOfWeek>Fri</DayOfWeek>
          <Date>10</Date>
          <Bar className="stormy">
            <Weather>
              <svg role="img" width="246" height="187" viewBox="0 0 246 187">
                <use xlinkHref="#stormy"></use>
              </svg>
            </Weather>
            <Temperature>
              67<span className="degrees">&deg;</span>
            </Temperature>
            <Content>
              <Precipitation>
                <Icon role="img">
                  <use xlinkHref="#precipitation"></use>
                </Icon>
                84%
              </Precipitation>
              <Low>
                <Icon role="img">
                  <use xlinkHref="#low"></use>
                </Icon>
                28&deg;
              </Low>
            </Content>
          </Bar>
        </Day>

        <Day>
          <DayOfWeek>Sat</DayOfWeek>
          <Date>11</Date>
          <Bar className="snowy">
            <Weather>
              <svg role="img" width="230" height="196" viewBox="0 0 230 196">
                <use xlinkHref="#snowy"></use>
              </svg>
            </Weather>
            <Temperature>
              32<span className="degrees">&deg;</span>
            </Temperature>
            <Content>
              <Precipitation>
                <Icon role="img">
                  <use xlinkHref="#precipitation"></use>
                </Icon>
                84%
              </Precipitation>
              <Low>
                <Icon role="img">
                  <use xlinkHref="#low"></use>
                </Icon>
                28&deg;
              </Low>
            </Content>
          </Bar>
        </Day>

        <Day>
          <DayOfWeek>Sun</DayOfWeek>
          <Date>12</Date>
          <Bar className="partly-cloudy">
            <Weather>
              <svg role="img" width="230" height="209" viewBox="0 0 230 209">
                <use xlinkHref="#partly-cloudy"></use>
              </svg>
            </Weather>
            <Temperature>
              57<span className="degrees">&deg;</span>
            </Temperature>
            <Content>
              <Precipitation>
                <Icon role="img">
                  <use xlinkHref="#precipitation"></use>
                </Icon>
                84%
              </Precipitation>
              <Low>
                <Icon role="img">
                  <use xlinkHref="#low"></use>
                </Icon>
                28&deg;
              </Low>
            </Content>
          </Bar>
        </Day>

        <Day>
          <DayOfWeek>Mon</DayOfWeek>
          <Date>13</Date>
          <Bar className="rainy">
            <Weather>
              <svg role="img" width="160" height="222" viewBox="0 0 160 222">
                <use xlinkHref="#rainy"></use>
              </svg>
            </Weather>
            <Temperature>
              63<span className="degrees">&deg;</span>
            </Temperature>
            <Content>
              <Precipitation>
                <Icon role="img">
                  <use xlinkHref="#precipitation"></use>
                </Icon>
                84%
              </Precipitation>
              <Low>
                <Icon role="img">
                  <use xlinkHref="#low"></use>
                </Icon>
                28&deg;
              </Low>
            </Content>
          </Bar>
        </Day>

        <Day>
          <DayOfWeek>Tue</DayOfWeek>
          <Date>14</Date>
          <Bar className="sunny">
            <Weather>
              <svg role="img" width="208" height="213" viewBox="0 0 208 213">
                <use xlinkHref="#sunny"></use>
              </svg>
            </Weather>
            <Temperature>
              71<span className="degrees">&deg;</span>
            </Temperature>
            <Content>
              <Precipitation>
                <Icon role="img">
                  <use xlinkHref="#precipitation"></use>
                </Icon>
                84%
              </Precipitation>
              <Low>
                <Icon role="img">
                  <use xlinkHref="#low"></use>
                </Icon>
                28&deg;
              </Low>
            </Content>
          </Bar>
        </Day>
      </Wrapper>

      <svg
        id="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        style={{ position: "absolute" }}
      >
        <symbol id="precipitation">
          <path d="M30.5363 15.355C28.9868 9.16 23.7398 4.705 17.4998 4.0825V1H14.4998V4.0825C8.25982 4.705 3.01282 9.16 1.46332 15.355C1.32382 15.913 1.51582 16.504 1.95982 16.8715C2.40382 17.239 3.01732 17.3215 3.54232 17.0845C7.07332 15.475 11.1953 15.73 14.4953 17.635V27.25C14.4953 29.3185 16.1783 31 18.2453 31C20.3123 31 21.9953 29.3185 21.9953 27.25V26.5H18.9953V27.25C18.9953 27.664 18.6593 28 18.2453 28C17.8313 28 17.4953 27.664 17.4953 27.25V17.6425C20.7968 15.7315 24.9263 15.472 28.4603 17.0845C28.9838 17.323 29.5988 17.2405 30.0428 16.8715C30.4868 16.5025 30.6758 15.913 30.5363 15.355ZM15.9998 15.01C13.7243 13.693 11.1518 13 8.49982 13C7.46482 13 6.44182 13.1065 5.43982 13.318C7.49032 9.4915 11.5013 7 15.9998 7C20.4983 7 24.5093 9.4915 26.5598 13.318C22.9943 12.5665 19.1633 13.1785 15.9998 15.01Z" />
        </symbol>

        <symbol id="low">
          <path d="M19.8917 6.91939C19.8917 4.77378 18.1456 3.02771 16 3.02771C13.8544 3.02771 12.1083 4.77378 12.1083 6.91939V18.7916C10.8785 19.8943 10.1625 21.4704 10.1625 23.1347C10.1625 26.3545 12.7816 28.9723 16 28.9723C19.2184 28.9723 21.8375 26.3545 21.8375 23.1347C21.8375 21.4717 21.1215 19.893 19.8917 18.7916V6.91939ZM16 26.3778C14.2124 26.3778 12.7569 24.9236 12.7569 23.1347C12.7569 22.0814 13.2771 21.089 14.1489 20.478L14.7028 20.0902V6.91939C14.7028 6.20462 15.2852 5.62217 16 5.62217C16.7148 5.62217 17.2972 6.20462 17.2972 6.91939V20.0915L17.8511 20.4793C18.7229 21.0877 19.2431 22.0814 19.2431 23.1347C19.2431 24.9236 17.7876 26.3778 16 26.3778Z" />
          <circle cx="16" cy="23.176" r="1.75506" />
        </symbol>
      </svg>

      <WeatherSvg />
    </Body>
  );
};

export default Day_08_Page;
