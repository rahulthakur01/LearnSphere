import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import HighLightText from "../Component/Core/HomePage/HighLightText";
import CTAbutton from "../Component/Core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlock from "../Component/Core/HomePage/CodeBlock";
import TimeLineSection from "../Component/Core/HomePage/TimeLineSection";
import LanguageLearningSection from '../Component/Core/HomePage/LanguageLearningSection'
import InstructorSection from "../Component/Core/HomePage/InstructorSection";
import Footer from "../Component/Common/Footer"
import ExploreMore from "../Component/Core/HomePage/ExploreMore";
const Home = () => {
  return (
    <>
      {/* section 1 */}
      <section className="flex flex-col justify-between mx-auto w-11/12 max-w-[1260px] items-center text-white">
        <Link to={"/signup"}>
          <div className="bg-richblack-800 text-bold text-richblack-200 mx-auto mt-16 p-1 transition-all duration-200 rounded-full hover:scale-95 w-fit">
            <div className="flex gap-2 items-center  rounded-full px-10 py-[5px]">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7 ">
          Empower Your Future with
          <HighLightText text={"Coding Skills"} />
        </div>

        <div className=" mt-4 w-[75%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex gap-7 mt-8 border-red-400">
          <CTAbutton active={true} linkto={"/signup"}>
            Learn more
          </CTAbutton>

          <CTAbutton active={false} linkto={"/login"}>
            Book a Demo
          </CTAbutton>
        </div>

        <div className="">
          <div className=" border-r-[16px] border-white mx-4 my-12 shadow-blue-200 border-b-[16px]">
            <video muted loop autoPlay>
              <source src={Banner} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* codeblock 1*/}
        <div>
          <CodeBlock
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighLightText text={"coding potential"} />
                with our online courses
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctaBtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctaBtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeBlock={`<!DOCTYPE html>\n<html>\n head><title>Example</\n title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\n nav><ahref="one/">One</a><ahref="two/">Two<\n /a><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>
        {/* codeblock 2 */}
        <div>
          <CodeBlock
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start
                <HighLightText text={"coding in seconds"} />
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctaBtn1={{
              btnText: "Continue Lession",
              linkto: "/signup",
              active: true,
            }}
            ctaBtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeBlock={`<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-red-400"}
          />
        </div>

          <ExploreMore />

      </section>

      {/* section 2 */}
      <section className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[310px]">
          <div className=" flex flex-col items-center justify-between w-11/12 max-w-[1260px] mx-auto">
            <div className="h-[160px]"></div>
            <div className="flex gap-7 text-white mt-10">
              <CTAbutton active={true} linkto={"/signup"}>
                <div className="flex gap-2 items-center">   
                  <p> Explore Full Catalog</p>
                  <FaArrowRight />
                </div>
              </CTAbutton>

              <CTAbutton active={false} linkto={"/login"}>
                <div>Learn more</div>
              </CTAbutton>
            </div>
          </div>
        </div>

        <div className="w-11/12 max-w-[1260px] flex flex-col items-center justify-between mx-auto gap-7 ">
          <div className="flex flex-row gap-5 mb-10 mt-[95px]">
            <div className="text-4xl font-semibold w-[45%] ">
              Get the Skills you need for a
              <HighLightText text={"Job that is in demand"} />
            </div>

            <div className="flex flex-col gap-10 items-start w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAbutton active={true} linkto={"/login"}>
                <div className="flex gap-2 items-center">
                  <p>Become an Instructor</p>
                  <FaArrowRight />
                </div>
              </CTAbutton>
            </div>
          </div>
         
          <TimeLineSection />
          <LanguageLearningSection />


        </div>
      </section>

      {/* section 3 */}
      <section className=" w-11/12 max-w-[1260px] bg-richblack-900 text-white flex flex-col items-center mx-auto justify-between gap-8">
        <InstructorSection />
      </section>
      <Footer/>
    </>
  );
};

export default Home;
