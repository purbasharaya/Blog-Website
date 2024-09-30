import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare, FaUser } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
            Welcome to Blogs Hive! We're a thriving community of writers and readers passionate about sharing stories, ideas and opinions.
          </p>
          <p> 
            Join us today and let your voice be heard!
          </p>
          <p>
            <span>Email:</span>omraj010@gmail.com
          </p>
          <p>
            <span>Phone:</span>+91 8789118605
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">BLOGS<span> HIVE</span></div>
        <div className="links">
          <Link to={"https://www.instagram.com/edgy._.omi/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"https://www.linkedin.com/in/om-raj-915695228/"} target="_blank">
            <AiFillLinkedin />
          </Link>
          <Link to={"https://github.com/omraj0"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://omraj0.github.io/myPortfolio/"} target="_blank">
            <FaUser />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
