import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Shop Mobile</h1>
        <p>Địa chỉ: 57a Hoàng Hữu Nam Q9 Tp.HCM</p>

        <p>SDT:0344627022</p>
        <p>Email:daiphu094@gmail.com</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://studio.youtube.com/channel/UCvY_g_NxZc4tEq2DElQv_ZQ">Instagram</a>
        <a href="https://studio.youtube.com/channel/UCvY_g_NxZc4tEq2DElQv_ZQ">Youtube</a>
        <a href="https://studio.youtube.com/channel/UCvY_g_NxZc4tEq2DElQv_ZQ">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
