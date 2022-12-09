const multer = require("multer");
const moment = require("moment");
const path = require("path");

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, moment() + "--" + file.originalname);
//   },
// });

const storage = multer.memoryStorage();
const imageUpload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|svg|png|gif/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (mimeType && extName) {
      return cb(null, true);
    } else {
      return cb("Image Only");
    }
  },
});

module.exports = imageUpload;
