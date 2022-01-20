import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Facebook from "@material-ui/icons/Facebook";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.youtube.com/channel/UCvY_g_NxZc4tEq2DElQv_ZQ";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">Liên Hệ</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dwjj1ijln/image/upload/v1638503543/avatars/2020-11-23_rifs8f.jpg"
              alt="Founder"
            />
            <Typography>Quảng Đại Phú</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Facebook
            </Button>
            <span>
              mọi thắc mắc vui lòng liên hệ với tôi qua SDT:0344627022 & daiphu094@gmail.com
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCvY_g_NxZc4tEq2DElQv_ZQ"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.youtube.com/channel/UCvY_g_NxZc4tEq2DElQv_ZQ" target="blank">
              <Facebook className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
