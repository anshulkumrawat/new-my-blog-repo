let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  router = express.Router();


// Multer File upload settings
const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});


// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});


// User model
let Usr = require('../models/Usr');


// POST User
router.post('/create-user', upload.single('avatar'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  const usr = new Usr({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    title: req.body.title,
    date: req.body.date,
    description: req.body.description,
    avatar: url + '/public/' + req.file.filename
  });
  usr.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "User registered successfully!",
      usrCreated: {
        _id: result._id,
        name: result.name,
        title: result.title,
        date: result.date,
        description: result.description,
        avatar: result.avatar
      }
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
})


// GET All User
router.get("/", (req, res, next) => {
  Usr.find().then(data => {
    res.status(200).json({
      message: "Users retrieved successfully!",
      usrs: data
    });
  });
});


// GET User
router.get("/:id", (req, res, next) => {
  Usr.findById(req.params.id).then(data => {
    if (data) {
      res.status(200).json(post);
    } else {
      res.status(404).json({
        message: "User not found!"
      });
    }
  });
});


module.exports = router;
