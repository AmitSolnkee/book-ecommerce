import React from "react";
import "./Jumbotron.css";
const Jumbotron = () => {
  return (
    <div className="jumbotron-container text-center  text-white position-relative">
      <div className="jumbotron-wrap mb-5">
        <h1>Welcome to Book Haven</h1>
        {/* <h3>India's Largest Book selling platform</h3> */}
        <h5>Your One-Stop Destination for the Best Books!</h5>
        <h5>
          Discover a world of knowledge and adventure with our extensive
          collection of books.
        </h5>
        <h5>Explore, Learn, and Immerse Yourself in the Stories.</h5>
        <a href="/shop" class="btn btn-primary btn-lg">
          Browse Books
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
