const TimeLine = require("../models/TimeLine");

exports.addTimeLine = async (req, res) => {
  try {
    const { title, points, date } = req.body;

    const pointsArray = JSON.parse(points);

    if (!title || !points || !date) {
      return res.status(400).json({
        success: false,
        message: "All Fields Are Required",
      });
    }

    const timeline = await TimeLine.create({
      title: title,
      points: pointsArray,
      date: date,
    });

    if (!timeline) {
      return res.status(400).json({
        success: false,
        message: "Failed to create new time line",
      });
    }

    return res.status(200).json({
      success: true,
      message: "New Time Line Created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error Ooccured While Creating Time Line",
    });
  }
};

exports.getAllTimeLine = async (req, res) => {
  try {
    const timeLines = await TimeLine.find();

    if (!timeLines) {
      return res.status(404).json({
        success: false,
        message: "Time Lines Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All Time Lines Fetched Successfully",
      timeLines,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error Occured While Fetching Time Lines",
    });
  }
};
