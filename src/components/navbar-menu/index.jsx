import React from "react";

import { NavbarMenuContainer } from "./style";

const NavbarMenu = ({ name, action }) => {
  return (
    <NavbarMenuContainer>
      <div className="icon-button" onClick={() => action()}>
        <div className={`${name} nav-content`} />
      </div>
    </NavbarMenuContainer>
  );
};

export default NavbarMenu;
