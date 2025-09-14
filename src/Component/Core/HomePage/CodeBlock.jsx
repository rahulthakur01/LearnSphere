import React from "react";
import CTAbutton from "../HomePage/Button";
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
      <main>
        {/* section 1 */}
        <section>
          <div>{heading}</div>
          <div>{subHeading}</div>
          <div>
            <CTAbutton active={ctaBtn1.active} linkto={ctaBtn1.linkto}>
              try it yourself
            </CTAbutton>

            <CTAbutton active={ctaBtn2.active} linkto={ctaBtn2.linkto}>
              Learn more
            </CTAbutton>
          </div>
        </section>
        {/* section 2 */}
        <section>
          <div>
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

          <div>
            
          </div>
        </section>
      </main>
    </>
  );
};

export default CodeBlock;
