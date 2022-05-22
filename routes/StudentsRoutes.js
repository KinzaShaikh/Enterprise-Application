const express= require('express')
const studentController = require('../controllers/StudentController')
const studentRouter = express();

studentRouter.get('/',studentController.displayHome);
studentRouter.get('/addStudent',studentController.addStudent);
studentRouter.get('/displayStudents',studentController.displayStudents);
studentRouter.post('/addNewStudent', studentController.addNewStudent);
studentRouter.get('/deleteStudent',studentController.deleteStudent);
studentRouter.get('/updateStudent',studentController.updateStudent);
studentRouter.post('/studentUpdated', studentController.studentUpdated)
module.exports=studentRouter;