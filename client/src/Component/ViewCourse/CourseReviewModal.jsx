import React from "react";
import IconBtn from "../Common/IconBtn";

const CourseReviewModal = ({ setReviewModal }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 bg-opacity-70">
        <div className="bg-richblack-800 rounded-lg p-6 w-[500px] text-white">
          <div className="flex justify-between items-center p-2 border">
            <h2>Add Review</h2>
            <button>*</button>
          </div>

          <div>
            <div>
              <img src="#" alt="" />
              <p>Rahul kumar</p>
              <p>Posting publicly</p>
            </div>
          </div>

          <form>
            <div>
              <label htmlFor="course-experience">Add your experience</label>
              <textarea
                name=""
                id="course-experience"
                placeholder="Add your exeprince"
              />
            </div>
            <div>
              <button>Cancel</button>
              <IconBtn text="Save" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CourseReviewModal;
