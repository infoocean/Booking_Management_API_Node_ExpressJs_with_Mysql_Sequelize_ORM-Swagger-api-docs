const multer = require("multer");
const uniqid = require("uniqid");
const { getExtension } = require("../common/commonfn");

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
    cb(null, Date.now() + uniqid() + file.originalname);
  },
});

//for user profile
const storage4 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/users_images/");
  },
  filename: (req, file, cb) => {
    // const image_properties = getExtension(file?.originalname);
    // if (image_properties === "jpeg" || image_properties === "png") {
    // } else {
    // }
    cb(null, Date.now() + uniqid() + file.originalname);
  },
});

//for site options
const storage5 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/siteoptions_images/");
  },
  filename: (req, file, cb) => {
    // const image_properties = getExtension(file?.originalname);
    // if (image_properties === "jpeg" || image_properties === "png") {
    // } else {
    // }
    cb(null, Date.now() + uniqid() + file.originalname);
  },
});

const upload = multer({ storage: storage });
const roomupload = multer({ storage: storage1 });
const spaceupload = multer({ storage: storage2 });
const automobileupload = multer({ storage: storage3 });
const userupload = multer({ storage: storage4 });
const siteupload = multer({ storage: storage5 });

module.exports = {
  upload,
  roomupload,
  spaceupload,
  automobileupload,
  userupload,
  siteupload,
};
