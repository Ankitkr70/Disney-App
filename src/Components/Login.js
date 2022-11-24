import React from "react";
import styled from "styled-components";
import Header from "./Header";
// import { selectUserName } from "./redux/userSlice"
// import {}
import { selectUserEmail } from "./redux/userSlice";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Login() {
  const userEmail = useSelector(selectUserEmail);
  return (
    <>
      {userEmail && <Navigate to="/home"></Navigate>}
      <Header></Header>
      <Container>
        <Content>
          <Logo1 src="../images/cta-logo-one.svg"></Logo1>
          <Button>GET ALL THERE</Button>
          <Descripiton>
            © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all
            related channel and programming logos are service marks of, and all
            related programming visuals and elements are the property of, Home
            Box Office, Inc. All rights reserved.
          </Descripiton>
          <Logo2 src="../images/cta-logo-two.png"></Logo2>
        </Content>
      </Container>
    </>
  );
}

export default Login;
const Container = styled.div`
  min-height: calc(100vh - 80px);
  overflow-x: hidden;
  background: url("../images/login-background.jpg") center center / cover fixed
    no-repeat;
  z-index: -1;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  max-width: 650px;
  width: 80%;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
`;
const Logo1 = styled.img`
  width: 100%;
`;
const Logo2 = styled.img`
  width: 100%;
`;
const Button = styled.button`
  padding: 10px;
  width: 100%;
  color: white;
  letter-spacing: 1.42px;
  background-color: #0063e5;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px 0;
  transition: all 250ms ease-in-out 0s;
  &:hover {
    background-color: #0483ee;
  }
`;
const Descripiton = styled.p`
  margin: 10px 0;
  font-size: 12px;
  letter-spacing: 1.42px;

  color: white;
`;
// and
