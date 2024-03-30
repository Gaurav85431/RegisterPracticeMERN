const express = require('express');
const routes = express.Router();

const path = require('path');

// Multer
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

// Controller
const { register, getUser, login, getVoterName } = require('../controller/newUserController');

routes.post('/register', upload.single('image'), register);

routes.get('/get', getUser);

routes.post('/login', login);


// -----------vote router
routes.post('/vote', getVoterName);





// ----------pdf
const pdfCntrl = require('../controller/PDFController');
routes.post('/set', upload.single('image'), pdfCntrl.setData)

















// ---------- Note Routes
const notesController = require('../controller/NotesController');

routes.post('/create-note', notesController.createNotes);

routes.get('/get-notes', notesController.getNotes);



// -------------------------------- Image routes
const imgController = require('../controller/imageController');

routes.post('/insert', upload.single('image'), imgController.insertData);
routes.get('/getImg', imgController.getImage);







// ------------------------------ RAndom routes (see randomController)

const randomController = require('../controller/randomController');
routes.post('/insert-data', upload.single('image'), randomController.Insertion);
routes.get('/show-data', randomController.showData);
routes.get('/show-image/:id', randomController.showImage);


// ----------------------------------Name Routes
const nameController = require('../controller/NameController');
routes.post('/set-Name', nameController.setValue);
routes.get('/get-Name', nameController.getValue);




// ------------------------------title, description, imgae

const titleDescImg = require('../controller/titleDescImg');
routes.post('/insert-datas', upload.single('image'), titleDescImg.insertData);
routes.get('/show-datas', titleDescImg.showData);




// -------------------------------------TItle, image :-

const TitleImageController = require('../controller/titleImgController');
routes.post('/insertData', upload.single('image'), TitleImageController.insertData);
routes.get('/getData', TitleImageController.getData);
routes.put('/updateData', upload.single('image'), TitleImageController.updateData);
routes.delete('/deleteData', TitleImageController.deleteData);



module.exports = routes;


