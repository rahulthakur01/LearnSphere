import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IconBtn from "../Common/IconBtn";

const VideoDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef();
  const { courseSectionData, courseEntireData, completedLectures } =
    useSelector((state) => state.viewCourse);
  const { token } = useSelector((state) => state.auth);
  const { courseId, sectionId, subSectionId } = useParams();

  const [videoData, setVideoData] = useState(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const setVideoSpecificDetails = () => {
      if (!courseSectionData.length) return;

      if (!courseId && !sectionId && !subSectionId) {
        navigate("/dashboard/enrolled-courses");
        return;
      }

      const filterData = courseSectionData.filter(
        (course) => course._id === sectionId
      );

      const filterVideoData = filterData?.[0]?.subSection?.filter(
        (data) => data._id === subSectionId
      );

      if (filterVideoData?.length) {
        setVideoData(filterVideoData[0]);
      } else {
        setVideoData({});
      }

      setVideoEnded(false);
    };

    setVideoSpecificDetails();
  }, [courseSectionData, courseEntireData, location.pathname]);

  // first video
  const isFirstVideo = () => {
    const currentSectionIndex = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );
    const currentSubSectionIndex = courseSectionData[
      currentSectionIndex
    ]?.subSection?.findIndex((data) => data._id === subSectionId);
    if (currentSectionIndex === 0 && currentSubSectionIndex === 0) {
      return true;
    } else {
      false;
    }
  };

  // last video
  const isLastVideo = () => {
    const currentSectionIndex = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );
    const noOfSubSections =
      courseSectionData[currentSectionIndex].subSection.length;
    const currentSubSectionIndex = courseSectionData[
      currentSectionIndex
    ]?.subSection?.findIndex((data) => data._id === subSectionId);
    if (
      currentSectionIndex === courseSectionData.length - 1 &&
      currentSubSectionIndex === noOfSubSections - 1
    ) {
      return true;
    } else {
      return false;
    }
  };

  // goToNextvideo
  const goToNextVideo = () => {
    const currentSectionIndex = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const noOfSubSections =
      courseSectionData[currentSectionIndex]?.subSection.length;
    const currentSubSectionIndex = courseSectionData[
      currentSectionIndex
    ]?.subSection?.findIndex((data) => data._id === subSectionId);

    // check  Are we on the LAST video of this section?
    if (currentSubSectionIndex !== noOfSubSections - 1) {
      // same section ke next video
      const nextSubSectionId =
        courseSectionData[currentSectionIndex].subSection[
          currentSectionIndex + 1
        ]._id;
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`
      );
    } else {
      // Go to first video of next section
      const nextSectionId = courseSectionData[currentSectionIndex + 1]._id;
      const nextSubSectionId =
        courseSectionData[currentSectionIndex + 1].subSection[0]._id;
      navigate(
        `view-course/${courseId}/section${nextSectionId}/sub-section/${nextSubSectionId}`
      );
    }
  };

  // handle complete lecture
  const handleVideoLectureCompletion = () => {};

  if (videoData === null) {
    return (
      <div className="flex items-center justify-center h-[500px] bg-black">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  if (!videoData?.videoUrl) {
    return (
      <div className="flex items-center justify-center h-[500px] bg-black">
        <div className="text-white text-lg">No Data Found</div>
      </div>
    );
  }

  return (
    <div className="border w-full relative">
      {/* Using native HTML5 video instead of ReactPlayer */}
      <video
        ref={videoRef}
        key={videoData?._id}
        src={videoData?.videoUrl}
        width="100%"
        height="300px"
        controls
        onEnded={() => setVideoEnded(true)}
        style={{ backgroundColor: "black" }}
        onError={(e) => console.error("Video error:", e)}
      >
        Your browser does not support the video tag.
      </video>

      {videoEnded && (
        <div className="absolute bg-black/70 inset-0 flex flex-col justify-center items-center gap-4 z-10 ">
          {!completedLectures.includes(subSectionId) && (
            <IconBtn
              disabled={loading}
              onclick={() => handleVideoLectureCompletion()}
              text={!loading ? "Mark as completed" : "Loading...."}
            />
          )}

          <IconBtn
            disabled={loading}
            onclick={() => {
              if (videoRef.current) {
                videoRef.current?.seek(0);
                setVideoEnded(false);
              }
            }}
            text="Rewatch"
            customClass="text-xl text-white"
          />

          <div>
            {/* Agar ye first video nahi hai, tabhi Prev button dikhao */}
            {!isFirstVideo() && (
              <button
                disabled={loading}
                onClick={goToPrevVideo}
                className="px-4 py-2 bg-gray-700 text-white rounded"
              >
                Prev
              </button>
            )}
            {!isLastVideo() && (
              <button
                disabled={loading}
                onClick={goToNextVideo}
                className="px-4 py-2 bg-yellow-500 text-black rounded"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}

      <div>
        <h1>{videoData.title}</h1>
        <p>{videoData?.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
