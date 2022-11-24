import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import db from "../firebase";
function Details() {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => setMovies(doc.data()));
  }, [id]);
  // const movies = useSelector(selectMovies);
  // console.log(movies);
  // const filterMovie = movies.filter((movie) => movie.id === id)[0];
  // console.log(filterMovie);

  return (
    <Container>
      <Poster>
        <img src={movies.backgroundImg} alt="" />
      </Poster>
      <MovieTitle>
        <img src={movies.titleImg} alt="" />
      </MovieTitle>
      <Controls>
        <PlayButton>
          <img src="../images/play-icon-white.png" alt="" />
          <span> PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="../images/play-icon-white.png" alt="" />
          <span> TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="../images/group-icon.png" alt="" />
        </GroupButton>
      </Controls>
      <SubTitle>{movies.subTitle}</SubTitle>
      <Description>{movies.description} </Description>
    </Container>
  );
}

export default Details;
const Container = styled.div`
  height: calc(100vh - 80px);
  padding: 0 40px;
`;

const Poster = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.75;
  }
`;

const MovieTitle = styled.div`
  padding: 20px 0;
  width: 350px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  margin: 20px 0;
  border: none;
  height: 50px;
  padding: 0 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 15px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 2px solid white;
  color: white;
  span {
    font-size: 14px;
    letter-spacing: 1.62px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const TrailerButton = styled(PlayButton)``;
const AddButton = styled.button`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  margin-right: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 24px;
  }
`;
const GroupButton = styled(AddButton)`
  background-color: black;
`;

const SubTitle = styled.div`
  font-size: 14px;
  letter-spacing: 1.42px;
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 1.4;
  margin-top: 10px;
  max-width: 600px;
`;
