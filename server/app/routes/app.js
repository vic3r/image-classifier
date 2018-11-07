const router = require('express').Router();
const rp = require('request-promise');
const multer = require('multer');

let Storage = multer.diskStorage({
  destination: (req, file, callback) =>{
    callback(null, "./store");
  },
  filename: (req, file, callback) => {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

let upload = multer({
  storage: Storage
}).array("name", 1);

router.route("/retrieveImage")
  .get((req, res) => {
      res.sendFile(__dirname + "/localhost:8000");
  });

router.route("/storeImage")
  .post((req, res) => {
    upload(req, res, (err) => {
      if(err) {
        return res.end("Failed to upload file");
      }
      return res.end("File uploaded");
    });
  });

module.exports = router;
