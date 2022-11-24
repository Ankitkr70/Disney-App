import React from "react";
import styled from "styled-components";

function Trailers() {
  return (
    <Container>
      <Trailer>
        <img src="../images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="../videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Trailer>
      <Trailer>
        <img src="../images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Trailer>
      <Trailer>
        <img src="../images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Trailer>
      <Trailer>
        <img src="../images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="../videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Trailer>
      <Trailer>
        <img src="../images/viewers-starwars.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Trailer>
    </Container>
  );
}

export default Trailers;
const Container = styled.div`
  margin: 30px 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Trailer = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: black 0px 20px 30px -10px;
  border-radius: 5px;
  transition: all 250ms ease-in-out 0s;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249);
  }
`;
