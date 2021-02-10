import React, { useState, useEffect } from "react";
import { useRouter } from "../Hooks/useRouter";

const Header = () => {
  const { push } = useRouter();
  return (
    <header>
      <div className="netflixLogo">
        <a id="logo" onClick={() => push("/")}>
          <img
            src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
            alt="Logo Image"
          />
        </a>
      </div>
      <nav className="main-nav">
        <a onClick={() => push("/")}>Home</a>
        <a onClick={() => push("/tvshows")}>TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#originals">Originals</a>
        <a href="#">Recently Added</a>
        <a target="_blank" href="https://codepen.io/cb2307/full/NzaOrm">
          Portfolio
        </a>
      </nav>
      <nav className="sub-nav">
        <a href="#">
          <i className="fas fa-search sub-nav-logo"></i>
        </a>
        <a href="#">
          <i className="fas fa-bell sub-nav-logo"></i>
        </a>
        <a href="#">Account</a>
      </nav>
    </header>
  );
};

export default Header;
