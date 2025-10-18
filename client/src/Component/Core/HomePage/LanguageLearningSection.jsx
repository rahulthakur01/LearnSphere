import React from "react";
import HighLightText from "./HighLightText";
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import plaYourLessons from "../../../assets/Images/Plan_your_lessons.png";
import compareWithOthers from "../../../assets/Images/Compare_with_others.png";
import CTAbutton from "./Button";
const LanguageLearningSection = () => {
  return (
    <>
      <section className="mt-[130px] mb-32">
        <div className="border border-red-500 flex flex-col items-center gap-5">
          <div className='text-4xl font-semibold text-center'>
            Your Swiss Knife for
            <HighLightText text={"learning any language"} />
          </div>
          <div  className="text-center w-[70%] text-richblack-600 mx-auto text-base font-medium">
            <p>
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
            </p>
          </div>
          <div className="flex flew-row">
            <img src={knowYourProgress} alt="knowYourProgress" className="object-contain -mr-32" />
            <img src={compareWithOthers} alt="compareWithOthers"className='object-contain '/>
            <img src={plaYourLessons} alt="plaYourLessons" className='object-contain -ml-36'/>
          </div>
          <div>
            <CTAbutton active={true} linkto={"/login"}>
              <p>learn more</p>
            </CTAbutton>
          </div>
        </div>
      </section>
    </>
  );
};

export default LanguageLearningSection;
