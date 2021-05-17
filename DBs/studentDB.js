const studentModel = require('../models/Student.Model');

async function fetchStudents() {
  const students = await studentModel.find({}, {__v: 0});
  return students;
}

async function fetchStudent(query) {
  const student = await studentModel.find(query);
  return student;
}
async function saveStudents(data) {
  let student = new studentModel(data);
  student = await student.save();
  return student;
}
async function modifyStudents(studentId, data) {
  const student = await studentModel.findByIdAndUpdate(studentId, { $set: data }, { new: true });
  return student;
}
async function removeStudents(studentId) {
  const students = await studentModel.findByIdAndDelete(studentId);
  return students;
}

module.exports = {
  fetchStudents,
  fetchStudent,
  saveStudents,
  modifyStudents,
  removeStudents,
};
