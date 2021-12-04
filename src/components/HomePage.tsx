import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <nav>
        <Link to="/day-01">Day 1</Link>
        <Link to="/day-02">Day 2</Link>
        <Link to="/day-03">Day 3</Link>
      </nav>
    </>
  );
};

export default HomePage;
