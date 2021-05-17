const studentController = require('../controller/students.controller');
module.exports = function(app) {
  app.get('/api/students/:studentID', studentController.getStudentByID);
  app.get('/api/students', studentController.getStudents);
  app.post('/api/students', studentController.createStudent);
  app.patch('/api/students/:studentID', studentController.updateStudent);
  app.delete('/api/students/:studentID', studentController.deleteStudent);
};