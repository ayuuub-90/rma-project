import path from "path";
import multer from "multer";
import express from "express";
const router = express.Router();

// events storage engine
const eventStorage = multer.diskStorage({
  destination: "./uploads/eventThumbnails",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// events storage engine
const userStorage = multer.diskStorage({
  destination: "./uploads/personOfInterests",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// init uploads for events
const uploadEvent = multer({
  storage: eventStorage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single("image");

// init uploads for users
const uploadUser = multer({
  storage: userStorage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single("image");

const checkFileType = (file, cb) => {
  const filetypes = /jpg|jpeg|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = path.extname(file.originalname).toLowerCase();
  const mimetype = file.mimetype;

  if (filetypes.test(extname) && mimetypes.test(mimetype)) cb(null, true);
  else cb("Error: images only!");
};

// route to handle event image upload
router.route("/event").post((req, res) => {
  uploadEvent(req, res, (err) => {
    if (err) res.status(400).json({ message: err });
    else {
      if (req.file === undefined)
        res.status(400).json({ message: "No file selected!" });
      else
        res.status(200).json({
          message: "File uploaded",
          file: `/uploads/eventThumbnails/${req.file.filename}`,
        });
    }
  });
});

// route to handle user image upload
router.route("/user").post((req, res) => {
  uploadUser(req, res, (err) => {
    if (err) res.status(400).json({ message: err });
    else {
      if (req.file === undefined)
        res.status(400).json({ message: "No file selected!" });
      else
        res.status(200).json({
          message: "File uploaded",
          file: `/uploads/personOfInterests/${req.file.filename}`,
        });
    }
  });
});

export default router;
