import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import * as Icons from "react-icons/vsc";

const SidebarLinks = ({ link, iconName }) => {
  const location = useLocation();
  const Icon = Icons[iconName];

  const matchRoute = (route)=>{
    return matchRoute({path:route}, location.pathname)
  }

  return (
    <>
      <NavLink >
        <span>|</span>
        <div>
          <Icon />
          <h2>{link.name}</h2>
        </div>
      </NavLink>
    </>
  );
};

export default SidebarLinks;
