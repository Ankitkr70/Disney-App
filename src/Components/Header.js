import React from "react";
import styled from "styled-components";
import { selectUserEmail, selectUserPhoto } from "./redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogin, setUserLogout } from "./redux/userSlice";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  });

  const signInUser = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signOutUser = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogout());
      navigate("/");
    });
  };
  return (
    <Nav>
      <Logo src="../images/logo.svg"></Logo>
      {!userEmail ? (
        <Login onClick={signInUser}> LOGIN</Login>
      ) : (
        <>
          <NavItems style={{ transform: showMenu ? "translateX(0%)" : "" }}>
            <a onClick={() => navigate("/home")}>
              <img src="../images/home-icon.svg" />
              <span>HOME</span>
            </a>
            <a>
              <img src="../images/search-icon.svg" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="../images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="../images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="../images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="../images/series-icon.svg" />
              <span>SERIES</span>
            </a>
          </NavItems>
          <User>
            <UserProfile src={userPhoto}></UserProfile>
            {userEmail && <SignOut onClick={signOutUser}>LOG OUT</SignOut>}
            <Button
              onClick={() => {
                setShowMenu(!showMenu);
                console.log(showMenu);
              }}
              src="https://cdn-icons-png.flaticon.com/512/5358/5358672.png"
            ></Button>
          </User>
        </>
      )}
    </Nav>
  );
}

export default Header;
const Nav = styled.nav`
  height: 80px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  /* position: relative; */
  /* justify-content: space-between; */
  position: relative;
  @media (max-width: 768px) {
    height: 80px;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;
  } ;
`;

const Logo = styled.img`
  width: 80px;
  object-fit: contain;
  padding: 0 15px;
`;
const NavItems = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  transition: transform 200ms ease;
  a {
    display: flex;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
    img {
      width: 20px;
    }
    span {
      font-size: 14px;
      letter-spacing: 1.42px;
      margin-left: 5px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms ease-in-out 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  @media (max-width: 768px) {
    /* display: none; */
    position: fixed;
    top: 80px;
    flex-direction: column;
    background-color: #090b13;
    width: 100%;
    z-index: 1;
    transform: translateX(-100%);
    a {
      padding: 10px 10px;
    }
  } ;
`;

const UserProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0 15px;
`;

const Login = styled.div`
  cursor: pointer;
  margin-left: auto;
  margin-right: 40px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  letter-spacing: 1.42px;
  border: 2px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms ease-in-out 0s;
  &:hover {
    background-color: #f9f9f9;
    color: black;
  }
`;

const User = styled.div`
  display: flex;
`;
const SignOut = styled(Login)`
  margin: 0 15px 0 0;
`;

const Button = styled.img`
  display: none;
  width: 48px;
  height: 48px;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-right: 10px;
  @media (max-width: 768px) {
    display: block;
  } ;
`;
