import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2>New arrivals</h2>
        <Link to="/products">More products</Link>
      </div>
    </div>
  );
};

export default Home;
