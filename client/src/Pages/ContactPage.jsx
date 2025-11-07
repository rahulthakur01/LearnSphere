import React from "react";
import ContactDetails from "../Component/Core/ContactPage/ContactDetails"
import ContactForm from "../Component/Core/ContactPage/ContactForm";
const ContactPage = () => {
  return (
    <>
      <main>
        <section className="w-11/12 max-w-[1260px] mx-auto mt-[60px] text-richblack-5">
          <div className="flex gap-8">
            <div className="lg:w-[40%] ">
                <ContactDetails/>
            </div>
            <div className="lg:w-[60%] ">
                <ContactForm/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
