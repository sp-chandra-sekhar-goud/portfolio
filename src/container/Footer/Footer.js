import React from "react";
import "./Footer.css";
import "../containers.css";
import details from "../../details";

const Footer = () => {
  const social = details.socialMedia.map((app) => {
    return <a href={app.link}>{app.icon}</a>;
  });
  const name = details.info.name
  return (
    <div id="Footer">
      <h4>Designed & Developed by {name}</h4>
      <div className="social">
        <h4>Find me on</h4>
        {social}
      </div>
    </div>
  );
};

export default Footer;
