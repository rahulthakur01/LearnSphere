import React from "react";
import HighLightText from "../Component/Core/HomePage/HighLightText";
import BannerImg1 from "../assets/Images/aboutus1.webp";
import BannerImg2 from "../assets/Images/aboutus2.webp";
import BannerImg3 from "../assets/Images/aboutus3.webp";
import FoundingStory from "../assets/Images/FoundingStory.png";
import Quote from "../Component/Core/AboutPage/Quote";
import Footer from "../Component/Common/Footer";
import Stats from "../Component/Core/AboutPage/Stats";
import LearningGridComponent from "../Component/Core/AboutPage/LearningGridComponent";
import ContactFormSection from "../Component/Core/AboutPage/ContactFormSection";
const About = () => {
  return (
    <>
      {/* section 1 */}
      <section className="w-full border h-[580px] bg-richblack-700 ">
        <div className="flex flex-col w-11/12 max-w-[1260px] mx-auto  mt-[80px] relative">
          <div className="flex flex-col gap-4 mx-auto items-center ">
            <p className="font-semibold text-richblack-50 text-4xl text-center mt-7 w-[65%] ">
              Driving Innovation in Online Education for
              <HighLightText text={"Brighter Future"} />
            </p>

            <p className=" mt-4 w-[85%] text-sm  font-bold text-richblack-300  text-center">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </div>
          <div className="sm:h-[40px] lg:h-[70px]"></div>
          <div className="">
            <div className="flex lg:flex-row flex-col my-8 gap-5 items-center justify-center ">
              <img src={BannerImg1} alt="image1" />
              <img src={BannerImg2} alt="image1" />
              <img src={BannerImg3} alt="image1" />
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      {/* section 3 */}
      <section>
        <div className="flex flex-col gap-10 mx-auto w-11/12 max-w-[1260px] text-richblack-500">
          <div className="flex flex-row justify-between my-24">
            <div className="flex flex-col gap-8 w-[50%] ">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl text-transparent font-semibold ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 ">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 ">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            <div>
              <img
                src={FoundingStory}
                alt="founding story"
                className="shadow-[0_0_15px_1px] shadow-[#FC6767]"
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-20 my-24">
            <div className="flex flex-col gap-8 w-[50%] ">
              <h1 className="bg-gradient-to-br from-[#FF512F] to-[#F09819] bg-clip-text text-4xl text-transparent font-semibold ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 ">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="flex flex-col gap-8 w-[50%] ">
              <h1 className="bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-4xl text-transparent font-semibold ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 ">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
            </div>{" "}
            <div></div>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section className=" h-[180px] bg-richblack-700">
        <Stats />
      </section>
      <section className="my-20 flex flex-col gap-8 justify-center items-center">
        <LearningGridComponent />
        <ContactFormSection />
      </section>

      <Footer />
    </>
  );
};
export default About;
