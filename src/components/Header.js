import React from "react";
import "./Header.css";

function Header({ name }) {
  return (
    <div className="header">
      {/* <img
        src="https://logos-marcas.com/wp-content/uploads/2020/04/TikTok-Logotipo-2016%E2%80%93.....jpg"
        alt="img"
      /> */}
      <h3>TikTok</h3>
      {/* <p>@Gina_23 </p> */}
      <p>{name} </p>
    </div>
  );
}

export default Header;
