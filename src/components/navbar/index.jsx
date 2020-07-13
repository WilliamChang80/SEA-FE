import React from "react";

import NavbarMenu from "components/navbar-menu";
import { NavbarContainer } from "./style";

const contentList = [
  { name: "Profile", url: "/profile" },
  { name: "Home", url: "/home" }
];

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="nav-container">
        {contentList.map((content) => (
          <NavbarMenu name={content.name} url={content.url} />
        ))}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
