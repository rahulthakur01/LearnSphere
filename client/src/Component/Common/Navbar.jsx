import React, { useEffect, useState } from "react";
import { NavbarLinks } from "../../data/navbar-links";
import { Link, matchPath, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import ProfileDropdown from "../Core/HomePage/Auth/ProfileDropdown";
import { useSelector } from "react-redux";
import { categories } from "../../Services/api";
import { apiConnector } from "../../Services/apiConnector";

const Navbar = () => {
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(false);
  const [subLinks, setSubLinks] = useState([]);
  console.log("SubLinks...........", subLinks);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(response.data.data);
    } catch (error) {
      console.log("COULD NOT FETCH CATEGORY....", error);
    }
    setLoading(false);
  };

  function matchRoute(route) {
    return matchPath({ path: route }, location.pathname);
  }
  return (
    <>
      <div className="h-16 flex jusitfy-center items-center border border-b-[1px] border-b-richblack-700 fixed top-0 left-0 z-50 w-full bg-richblack-900 ">
        <div className="flex justify-between items-center w-11/12 max-w-[1260px] mx-auto">
          <Link to="/" className="text-white font-bold text-xl">
            LearnSphere
          </Link>
          <nav>
            <ul className="flex gap-x-6 text-richblack-25">
              {NavbarLinks.map((link, index) => {
                return (
                  <li className="text-white" key={index}>
                    {link.title === "Catalog" ? (
                      <div className="flex items-center gap-2 relative group">
                        <p>{link.title}</p>
                        <FaChevronDown />
                        <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                          {" "}
                          <div
                            className="absolute left-[50%] top-0
                              translate-x-[80%]
                              translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5"
                          ></div>
                          {loading ? (
                            <div>Loading....</div>
                          ) : (
                            <div>
                              {subLinks.length ? (
                                <>
                                {subLinks
                                  ?.filter(
                                    (subLink) => subLink?.courses?.length > 0
                                  )
                                  ?.map((subLink, i) => (
                                    <Link
                                      to={`/catalog/${subLink.name
                                        .split(" ")
                                        .join("-")
                                        .toLowerCase()}`}
                                      className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-900"
                                      key={i}
                                    >
                                      <p>{subLink.name}</p>
                                    </Link>
                                  ))}
                                </>
                              ) : (
                                <p>No Courses found</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <Link to={link?.path}>
                        <p
                          className={`${
                            matchRoute(link?.path)
                              ? "text-yellow-25"
                              : "text-richblack-25"
                          }`}
                        >
                          {link.title}
                        </p>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            {token == null && (
              <Link to="/signup">
                <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                  Signup
                </button>
              </Link>
            )}
            {token === null && (
              <Link to="/login">
                <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                  Login
                </button>
              </Link>
            )}
            {token !== null && <ProfileDropdown />}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
