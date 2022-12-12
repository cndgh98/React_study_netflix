import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  const [show, setshow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setshow(true);
      } else {
        setshow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };
  const handleonClick = () => {
    setSearchValue("");
    navigate("/");
  };
  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/440px-Netflix_2015_logo.svg.png"
        className="nav_logo"
        onClick={handleonClick}
      />
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="영화 검색"
      ></input>
      <img
        alt="User logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        className="nav_avatar"
      />
    </nav>
  );
}
