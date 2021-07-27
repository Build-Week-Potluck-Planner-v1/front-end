import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  width: 100%;
  height: 23rem;
  background-color: #8a2b06;
  color: white;

  & .header {
    display: flex;
    height: 4rem;
    padding-top: 1rem;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
    @media (max-width: 930px) {
      flex-direction: column;
    }
    @media (max-width: 480px) {
      font-size: 0.5rem;
    }
  }

  & .headerImg {
    width: 110%;
    height: 15rem;
    object-fit: cover;
    margin-top: 2rem;
  }
  & h1 {
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 3rem;
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
  & h1 img {
    height: 40px;
    width: 40px;
    margin-right: 1rem;
  }
  & a {
    color: white;
    text-decoration: none;
    margin: 0.5rem;
    font-weight: bold;
    background: #8ac2cf;
    padding: 0.5rem 1rem;
    border-radius: 10px;
  }
  & a:hover {
    transform: scale(1.5);
    background: #41acc4;
  }
`;
const Header = () => {
  return (
    <HeaderStyle>
      <div className="header">
        <h1>It is a potluck!</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="login">Login</Link>
          <Link to="signup">Sign Up</Link>
          <Link to="/">Potluck Planner</Link>
        </nav>
      </div>

      <img
        className="headerImg"
        alt="headerImg"
        src="https://s3.amazonaws.com/secretsaucefiles/photos/images/000/114/329/large/potluck.jpg?1485393802"
      />
    </HeaderStyle>
  );
};

export default Header;
