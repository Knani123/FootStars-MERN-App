import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { notif } from "../action/notifAction";
import Vitrine from "../components/Vitrine";
import Bgfoot2 from "../components/Bgfoot2";
import HomeComponent from "../components/homeComponent";
import Pub from "../components/pub";
import "./page.css";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(notif({ tf: false }));
  }, []);

  const auth = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    if (auth.isAuth) {
      console.log("Login");
    }
  }, [auth.isAuth]);
  return (
    <div className="position-relative home ">
      {!auth.isAuth ? (
        <>
          <Bgfoot2 />
          <Vitrine />
          <footer className="d-flex justify-content-center text-center fixed-bottom flex-wrap">
            <h5 className="w-100 m-auto p-5">All rights reserved © 2021</h5>
          </footer>
        </>
      ) : (
        <div className="homeLog container d-flex justify-content-between align-items-center flex-column">
          <div className="p-5">
            <div className="row ">
              <HomeComponent
                src="https://i.ytimg.com/vi/mUtwNlZfM_M/maxresdefault.jpg"
                name="Your profile"
                link="/profil"
              />
              <HomeComponent
                src="https://www.pngitem.com/pimgs/m/182-1820352_player-football-silhouette-kick-png-free-photo-clipart.png"
                name="Players"
                link="/allUsers"
              />
              <HomeComponent
                src="https://img.freepik.com/vecteurs-libre/contexte-diffusion-championnat-football_1284-26533.jpg?size=626&ext=jpg&ga=GA1.2.1151995299.1610236800"
                name="Matchs"
                link="/Matchs"
              />
            </div>
            <Pub />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
