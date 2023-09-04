const uniqid = require("uniqid");
const fs = require("fs");
//generate uniquie order id
exports.generateOrderId = async () => {
  return await uniqid(`#${Date.now()}`);
};
//get file extention
exports.getExtension = (fileName) => {
  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex === -1) {
    return "";
  }
  return fileName.substring(dotIndex + 1);
};
//for single image deleting
exports.deleteSinglefile = (pathToFile) => {
  fs.unlink(pathToFile, function (err) {
    if (err) {
      //throw err;
    } else {
      console.log("Successfully deleted the file.");
    }
  });
};
//for multiple image deleting
exports.deleteMultiplefile = (pathToFile) => {
  pathToFile.map((data, keys) => {
    fs.unlink(data, function (err) {
      if (err) {
        //throw err;
      } else {
        console.log("Successfully deleted the file.");
      }
    });
  });
};

//image extention validation
exports.ValidateImageExtension = (fileName) => {
  var allowedExtensions = /(\.jpg|\.jpeg|\.svg|\.png|\.gif)$/i;
  if (!allowedExtensions.exec(fileName?.originalname)) {
    return true;
  }
};

//pagination function
exports.getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? (page - 1) * limit : 0;
  return { limit, offset };
};
//formating page data responce
exports.getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: items } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalPages, totalItems, currentPage, items };
};
