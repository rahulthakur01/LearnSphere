import React from "react";
import ContactUsFom from "../ContactPage/ContactUsFom";

const ContactFormSection = () => {
  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div>
          <h1 className="text-center text-4xl font-semibold text-richblack-5">Get in Touch</h1>
          <p className="text-center text-richblack-300 mt-3">
            We&apos;d love to here for you, Please fill out this form.
          </p>
        </div>

        <div>
            <ContactUsFom/>
        </div>

      </div>
    </>
  );
};

export default ContactFormSection;
