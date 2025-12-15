const Section = require("../models/Section");
const Course = require("../models/Course");
const SubSection = require("../models/SubSection");
// CREATE a new section
exports.createSection = async (req, res) => {
  try {
    // Extract the required properties from the request body
    const { sectionName, courseId } = req.body;

    // Validate the input
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Missing required properties",
      });
    }

    // Create a new section with the given name
    const newSection = await Section.create({ sectionName });

    // Add the new section to the course's content array
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        // courseContent = array of Section IDs
        $push: {
          courseContent: newSection._id,
        },
      },
      { new: true }
    )
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();

    // Return the updated course object in the response
    res.status(200).json({
      success: true,
      message: "Section created successfully",
      updatedCourse,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// UPDATE a section
exports.updateSection = async (req, res) => {
  try {
    const { sectionName, sectionId, courseId } = req.body;
    const section = await Section.findByIdAndUpdate(
      sectionId,
      { sectionName },
      { new: true }
    );

    // populate ka simple matlab
    // ID hatao → actual document dikhao
    // We use nested populate to fetch course → sections → subsections 
	// in a single query so the frontend receives fully structured data instead of just ObjectIds

	const course = await Course.findById(courseId)
	.populate({
		path:"courseContent",
		populate:{
			path:"subSection"
		}
	}).exec();

    res.status(200).json({
      success: true,
      message: section,
	  data:course
    });
  } catch (error) {
    console.error("Error updating section:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// DELETE a section
exports.deleteSection = async (req, res) => {
  try {
    // fetch section id and course id 
    const { sectionId, courseId} = req.body;

    // Remove sectionId(reference) from course.courseContent
    await Course.findByIdAndUpdate(courseId, {
      $pull:{
        courseContent: sectionId
      }
    })
    // check section is preset or not
    const section = await Section.findById(sectionId);
    if(!section){
      return res.status(404).json({
        success:false,
        message:"Section not found"
      })
    }
    // Delete all subSections
    // Agar _id in($in) values me se kisi bhi ek ke barabar ho, to delete kar do
    await SubSection.deleteMany({_id: {$in: section.subSection}})

    // Finally Delete Section
    await Section.findByIdAndDelete(sectionId);

   //HW -> Course ko bhi update karo
   //find the updated course and return 
    const course = await Course.findById(courseId).populate({
      path:"courseContent",
      populate:{
        path:"subSection"
      }
    })
    res.status(200).json({
      success: true,
      message: "Section deleted",
      data:course
    });
  } catch (error) {
    console.error("Error deleting section:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
