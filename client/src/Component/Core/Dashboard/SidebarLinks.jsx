import React from "react";
import { matchPath, NavLink, useLocation } from "react-router-dom";
import * as Icons from "react-icons/vsc";

const SidebarLinks = ({ link, iconName }) => {
  const location = useLocation();
  const Icon = Icons[iconName];

  const matchRoute = (route)=>{
    return matchPath({path:route}, location.pathname)
  }

  return (
    <>
      <NavLink to={link.path} className={`px-8 py-2 ${matchRoute(link.path) ? "bg-red-700" : "bg-opacity-0"} relative`}>
        <span className={`absolute  left-0 top-0 h-full w-[0.2rem] bg-yellow-50 ${matchRoute(link.path) ? "opacity-100": "opacity-0"}`}></span>
        <div className="text-richblack-5 mt-8">
          <Icon className="text-lg "/>
          <h2>{link.name}</h2>
        </div>
      </NavLink>
    </>
  );
};

export default SidebarLinks;
