const sharp = require("sharp");
const moment = require("moment");

const picUpload = async (req, res) => {
  try {
    if (req.file) {
      let fileName = moment() + "--" + req.file.originalname;
      await sharp(req.file.buffer).resize(500, 500).toFile(`./uploads/resized/${fileName}`);
      res.json({ msg: "pic uploaded succesfully.!!!" });
    } else {
      res.json({ msg: "please select file to upload" });
    }
  } catch (error) {
    res.json("error", error);
  }
};

module.exports = { picUpload };
