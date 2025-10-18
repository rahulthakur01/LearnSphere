import React from "react";
import { Link, Links } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { FooterLink2 } from "../../data/footer-links";
const Subjects = [
  "AI",
  "Cloud Computing",
  "Code Foundations",
  "Computer Science",
  "Cybersecurity",
  "Data Analytics",
  "Data Science",
  "Data Visualization",
  "Developer Tools",
  "DevOps",
  "Game Development",
  "IT",
  "Machine Learning",
  "Math",
  "Mobile Development",
  "Web Design",
  "Web Development",
];
const Languages = [
  "Bash",
  "C++",
  "C#",
  "Go",
  "HTML & CSS",
  "Java",
  "JavaScript",
  "Kotlin",
  "PHP",
  "Python",
  "R",
  "Ruby",
  "SQL",
  "Swift",
];
const careerBuilding = [
  "Career paths",
  "Career services",
  "Interview prep",
  "Professional certification",
];
const others = ["Full Catalog", "Beta Content"];
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <>
      <main className="bg-richblack-800">
        <section className="w-11/12 max-w-[1260px] text-richblack-400 mx-auto  flex flex-row gap-8 items-center justify-between py-14">
          <div className="flex flex-col lg:flex-row w-[100%] pb-5 border-b border-richblack-700 ">
            {/* left section  */}
            <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
              <div>
                <div className="flex flex-col gap-3  mb-7">
                  <img src={Logo} alt="logo" />
                  <h1 className="text-richblack-50 font-semibold text-[16px]">
                    Company
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  {["About", "Careers", "Affiliates"].map((ele, index) => {
                    return (
                      <div
                        key={index}
                        className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      >
                        <Link to={ele.split(" ").join("-").toLowerCase()}>
                          {ele}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <FaFacebook />
                  <FaGoogle />
                  <FaTwitter />
                  <FaYoutube />
                </div>
              </div>
              <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0 ">
                <h1 className="text-richblack-50 font-semibold text-[16px]">
                  Resources
                </h1>

                <div className="flex flex-col gap-2">
                  {Resources.map((ele, index) => {
                    return (
                      <div
                        key={index}
                        className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2"
                      >
                        <Link to={ele.split(" ").join("-").toLowerCase()}>
                          {ele}
                        </Link>
                      </div>
                    );
                  })}
                </div>

                <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                  Support
                </h1>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                  <Link to={"/help-center"}>Help Center</Link>
                </div>
              </div>

              <div>
                <h1 className="text-richblack-50 font-semibold text-[16px]">
                  Plan
                </h1>
                <div className="flex flex-col gap-3">
                  {Plans.map((ele, i) => {
                    return (
                      <div
                        key={i}
                        className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2"
                      >
                        <Link to={ele.split(" ").join("-").toLowerCase()}>
                          {ele}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                  Comunity
                </h1>
                <div className="flex flex-col gap-3">
                  {Community.map((ele, i) => {
                    return (
                      <div
                        key={i}
                        className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2"
                      >
                        <Link to={ele.split(" ").join("-").toLowerCase()}>
                          {ele}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* right section  */}
            <div className="w-[50%] flex flex-row justify-between lg:pl-5 pl-3 flex-wrap">
              {FooterLink2.map((ele, i) => {
                return (
                  <div>
                    <h1 className="text-richblack-50 font-semibold text-[16px] capitalize">
                      {ele.title}
                    </h1>
                    <div className="flex flex-col gap-2 mt-2">
                      {
                        ele.links.map((lin, index)=>{
                          return(
                            <div key={index}
                             className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                            >
                              {
                                <Link to={lin.link}>{lin.title}</Link>
                              }
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="w-11/12 max-w-[1260px] text-richblack-400 mx-auto  flex flex-row gap-8 items-center justify-between  pb-14 text-sm">
          <div className="flex flex-col lg:flex-row justify-between items-center w-[100%]">
            <div className="flex flex-row">
              {BottomFooter.map((ele, i) => {
                return (
                  <div
                    key={i}
                    className={`${
                      BottomFooter.length - 1 === i
                        ? ""
                        : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    } px-4`}
                  >
                    <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                      {ele}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="text-center text-[16px]">
              Made with Rahul Thakur 😃 © 2023 LearnSphere
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Footer;


