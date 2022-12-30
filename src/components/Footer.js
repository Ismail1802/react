import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <article className={classes.footer}>
      <div className={classes["article-div"]}>
        <h1>Shortly</h1>

        <div className={classes.features}>
          <h3>Features</h3>
          <ul>
            <li>Link shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className={classes.resources}>
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className={classes.company}>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={classes["social-div"]}>
          <div className={classes.socials}>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Footer;
