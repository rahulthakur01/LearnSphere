import React from "react";
import ContactDetails from "../Component/Core/ContactPage/ContactDetails"
import ContactForm from "../Component/Core/ContactPage/ContactForm";
const ContactPage = () => {
  return (
    <>
      <main>
        <section className="w-11/12 max-w-[1260px] border mx-auto mt-[80px] text-richblack-5">
          <div className="flex items-center gap-8">
            <div className="lg:w-[40%] border">
                <ContactDetails/>
            </div>
            <div className="lg:w-[60%] border">
                <ContactForm/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
