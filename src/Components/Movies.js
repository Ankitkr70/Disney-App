import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectMovies } from "./redux/movieSlice";
import { Link } from "react-router-dom";

function Movies() {
  const movies = useSelector(selectMovies);
  return (
    <Container>
      <h4>Recommented for you</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            return (
              <Movie key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img src={movie.cardImg} alt="" />
                </Link>
              </Movie>
            );
          })}
      </Content>
    </Container>
  );
}

export default Movies;
const Container = styled.div``;

const Content = styled.div`
  margin: 30px 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Movie = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: black 0px 20px 30px -10px;
  border-radius: 10px;
  transition: all 250ms ease-in-out 0s;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249);
  }
`;
