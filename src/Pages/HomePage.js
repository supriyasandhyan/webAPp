import React from "react";
import Pattern from "../Assets/Pattern.svg";
import "../Css/Home.css";
import Options from "./Options";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid home-main">
        <img
          src={Pattern}
          className="pattern-img img-fluid"
          alt="home-img"
        />
        <div className="container home2">
          <h1>Gutenberg Project</h1>
          <p>
            A social cataloging website that allows you to freely search its
            database of books, annotations, and reviews.
          </p>
        </div>
      </div>
      <Options/>
    </>
  );
};
export default HomePage;
