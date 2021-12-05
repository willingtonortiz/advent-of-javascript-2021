import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
`;

const Nav = styled.div`
  padding: 16px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 12px;

  & a {
    width: 200px;
    font-size: 20px;
    padding: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-decoration: none;
    transition: all 0.5s ease;
    font-weight: bold;
    border-radius: 7px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & a:nth-child(n) {
    color: tomato;
    border: 1px solid tomato;
  }
  & a:nth-child(2n) {
    color: mediumseagreen;
    border: 1px solid mediumseagreen;
  }

  & a:hover {
    background-color: #eee;
  }
`;

const HomePage = () => {
  return (
    <>
      <Header>Advent Of Javascript 2021</Header>

      <Nav>
        <Link to="/day-01">Day 1</Link>
        <Link to="/day-02">Day 2</Link>
        <Link to="/day-03">Day 3</Link>
        <Link to="/day-04">Day 4</Link>
        <Link to="/day-05">Day 5</Link>
        <Link to="/day-06">Day 6</Link>
        <Link to="/day-07">Day 7</Link>
        <Link to="/day-08">Day 8</Link>
        <Link to="/day-09">Day 9</Link>
        <Link to="/day-10">Day 10</Link>
        <Link to="/day-11">Day 11</Link>
        <Link to="/day-12">Day 12</Link>
        <Link to="/day-13">Day 13</Link>
        <Link to="/day-14">Day 14</Link>
        <Link to="/day-15">Day 15</Link>
        <Link to="/day-16">Day 16</Link>
        <Link to="/day-17">Day 17</Link>
        <Link to="/day-18">Day 18</Link>
        <Link to="/day-19">Day 19</Link>
        <Link to="/day-20">Day 20</Link>
        <Link to="/day-21">Day 21</Link>
        <Link to="/day-22">Day 22</Link>
      </Nav>
    </>
  );
};

export default HomePage;
