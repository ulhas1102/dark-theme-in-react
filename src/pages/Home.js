import React from "react";
import Carousel from "../component/Carousel";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-md-5">
            <h1 className="text-center">Home</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
