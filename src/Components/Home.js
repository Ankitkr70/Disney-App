import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Trailers from "./Trailers";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "./redux/movieSlice";
import { useSelector } from "react-redux";
import { selectUserEmail } from "./redux/userSlice";
import { Navigate } from "react-router-dom";

function Home() {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      dispatch(setMovies(tempMovies));
    });
  }, []);
  return (
    <Container>
      {!userEmail && <Navigate to="/"></Navigate>}
      <ImgSlider></ImgSlider>
      <Trailers></Trailers>
      <Movies></Movies>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 80px);
  overflow-x: hidden;
  padding: 0 40px;
  background: url("../images/home-background.png") center center / cover fixed
    no-repeat;
`;
