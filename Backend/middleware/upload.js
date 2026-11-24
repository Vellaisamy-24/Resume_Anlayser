import multer from "multer";
import multer from "multer";
import path from "path";



// folder and fileName
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");  // save in upload folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); //1795501234567.pdf
  },
});


//pdf and docx only allowed
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "application/pdf",   //.pdf
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", //.docx
  ];
  if (allowedTypes.includes(file.mimetype)) {   //file.mimetype = fileExtension
    cb(null, true);
  } else {
    cb(new Error("Only pdf , docx allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, //5MB
});

export default upload;

//Saves the File according to storage
//Validate files using fileFiler
//Restrict file size to 5MB
