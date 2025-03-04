const User = require("../models/quiz");

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id, 
      { title: title, description: description, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedUser,
      message: "Updated Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
