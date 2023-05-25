const path = require('path');
const multer = require('multer');

const PICTURE_FOLDER = '../../upload/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, PICTURE_FOLDER));
  },
  filename: (req, file, cb) => {
    let filename = Date.now();
    switch (file.mimetype) {
      case 'image/png':
        filename = filename + '.png';
        break;
      case 'image/jpeg':
        filename = filename + '.jpeg';
        break;
      default:
        break;
    }
    cb(null, filename);
  },
});

const upload = multer({ storage });

module.exports = { upload };