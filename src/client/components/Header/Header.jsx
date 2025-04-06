import Image from "next/image";
import Link from "next/link";
import React from "react";
// import logo from "public/images/wio-logo-small.png";

import ButtonStyles from "styles/Button.module.scss";
import HeaderStyles from "./Header.module.scss";

const Header = ({ props }) => {

  return (
    // <>Hi</>
    <div className={HeaderStyles.header}>
      <div className={HeaderStyles.companyLogo}>
        <Link href="/">
          <span>
            Hospital Management
            {/* <Image  width={180} height={27} src={logo} alt="nav__logo" /> */}
          </span>
        </Link>
      </div>
      <i className={[HeaderStyles.userIcon, "pi pi-user"].join(" ")}></i>
      {/* <button className={[ ButtonStyles.btn, ButtonStyles.headerBtn ].join(" ")}>Admin</button> */}
      {/* <button className={[ ButtonStyles.btn, ButtonStyles.logoutBtn ].join(" ")}> */}
        {/* <Link href={"/logout"}>Logout</Link> */}
      {/* </button> */}
    </div>
  );
}

export default Header;
