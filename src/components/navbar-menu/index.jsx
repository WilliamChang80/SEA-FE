import React from "react";

import { NavbarMenuContainer } from "./style";

const NavbarMenu = ({ name, url }) => {
  return (
    <NavbarMenuContainer>
      <div className="nav-content">{name}</div>
    </NavbarMenuContainer>
  );
};

export default NavbarMenu;
