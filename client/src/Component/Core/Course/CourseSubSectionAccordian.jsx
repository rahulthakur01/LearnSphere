import { HiOutlineVideoCamera } from "react-icons/hi";

const CourseSubSectionAccordian = ({subSec}) => {
  return (
    <>
      <div className="flex justify-between bg-opacity-20 py-7 px-6">
        <div className="flex items-center gap-2">
          <i>
            <HiOutlineVideoCamera />
          </i>
          <p>
            {subSec.title}
          </p>
        </div>
       
      </div>
    </>
  );
};
export default CourseSubSectionAccordian;
