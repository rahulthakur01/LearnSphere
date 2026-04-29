const SubSection = require("../models/SubSection");
const CourseProgress = require("../models/CourseProgress");

exports.updateCourseProgress = async (req, res) => {
  const { courseId, subSectionId } = req.body;
  const userId = req.user.id;

  try {
    const subSection = await SubSection.findById(subSectionId);

    if (!subSection) {
      return res.status(400).json({ error: "Invalid subSection" });
    }
    let courseProgress = await CourseProgress.findOne({
      courseID: courseId,
      userId: userId,
    });

    if (!courseProgress) {
     courseProgress = await CourseProgress.create({
        courseID: courseId,
        userId: userId,
        completedVideos:[],
     })
    }


    if (courseProgress.completedVideos.includes(subSectionId)) {
      return res.status(400).json({
        error: "SubSection already registered",
      });
    }
    //poush into completed video
    courseProgress.completedVideos.push(subSectionId);
    await courseProgress.save();
    
    return res.status(200).json({
      success: true,
      message: "Course Progress Updated Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
