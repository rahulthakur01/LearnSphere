import React from "react";
import CTAbutton from "../HomePage/Button";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa6";

const CodeBlock = ({
  position,
  heading,
  subHeading,
  ctaBtn1,
  ctaBtn2,
  codeBlock,
  codeColor,
}) => {
  return (
    <>
      <main className={`flex ${position} my-20 justify-between gap-10 `}>
        {/* section 1 */}
        <section className="w-[50%] flex flex-col gap-8">
          <div>{heading}</div>
          <div className="text-richblack-300 font-bold">{subHeading}</div>
          <div className="flex gap-7 mt-7">
            <CTAbutton active={ctaBtn1.active} linkto={ctaBtn1.linkto}>
              <div className="flex gap-2 items-center">
                {ctaBtn1.btnText}
                <FaArrowRight />
              </div>
            </CTAbutton>

            <CTAbutton active={ctaBtn2.active} linkto={ctaBtn2.linkto}>
              Learn more
            </CTAbutton>
          </div>
        </section>
        {/* section 2 */}
        <section className="flex text-10[px] w-[100%] py-4 lg:w-[500px]">
          <div className="w-[10%] text-center flex flex-col text-richblack-400 font-inter font-bold">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>

          <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
            <div>
              <TypeAnimation
                sequence={[codeBlock, 2000, ""]}
                repeat={Infinity}
                cursor={true}
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                }}
                omitDeletionAnimation={true}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CodeBlock;
