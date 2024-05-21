const Project = require("../models/Projects");
const { uploadeImageToCloudinary } = require("../utils/imageUploader");

exports.addProject = async (req, res) => {
  try {
    let { name, description, tags, liveLink, srcLink } = req.body;

    const projectImage = req.files.projectImage;
    const teches = JSON.parse(tags);

    if (
      !name ||
      !description ||
      !teches.length ||
      !projectImage ||
      !liveLink ||
      !srcLink
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields Are Required",
      });
    }

    const image = await uploadeImageToCloudinary(
      projectImage,
      process.env.FOLDER_NAME
    );

    const project = await Project.create({
      name: name,
      description: description,
      tags: teches,
      projectImage: { imageUrl: image.secure_url, publicId: image.public_id },
      liveLink: liveLink,
      srcCodeLink: srcLink,
    });

    return res.status(200).json({
      success: true,
      message: "New Project Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error Occred While Adding New Project",
    });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    if (!projects) {
      return res.status(404).json({
        success: false,
        message: "Projects Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All Projects Fetched Successfully",
      projects,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error Occured While Fetching All Projeects",
    });
  }
};
