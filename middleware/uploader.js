const multer = require("multer");
const uniqid = require("uniqid");

//for hotel
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/hotels_images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + uniqid() + file.originalname);
  },
});

//for room
const storage1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/room_images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + uniqid() + file.originalname);
  },
});

//for space
const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/space_images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + uniqid() + file.originalname);
  },
});

//for auto mobile
const storage3 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/auto_mobile_images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });
const roomupload = multer({ storage: storage1 });
const spaceupload = multer({ storage: storage2 });
const automobileupload = multer({ storage: storage3 });

module.exports = { upload, roomupload, spaceupload, automobileupload };
