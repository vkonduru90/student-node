const {
  fetchStudents,
  fetchStudent,
  saveStudents,
  modifyStudents,
  removeStudents,
} = require('../DBs/studentDB');

async function getStudents(req, res) {
  const students = await fetchStudents();
  if (students.length == 0) {
    return res.status(200).json({ success: true, message: `No Students Found.` });
  }
  return res.status(200).json(students);
}

async function getStudentByID(req, res) {
  const studentId = req.params.studentID;
  if (!studentId) {
    return res.status(400).json({ success: false, message: `Student ID is Required.` });
  }
  const student = await fetchStudent({ _id: studentId });
  if (!student) {
    return res.status(400).json({ success: false, message: `No Students Found.` });
  }
  return res.status(200).json(student);
}

async function createStudent(req, res) {
  const { name, email, password, rollNumber } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: `Name Required` });
  }
  if (!email) {
    return res.status(400).json({ success: false, message: `Email Required` });
  }
  if (!password) {
    return res.status(400).json({ success: false, message: `Password Required` });
  }
  if (!rollNumber) {
    return res.status(400).json({ success: false, message: `RollNumber Required` });
  }
  // JOI
  const student = await fetchStudent({ email });
  if (student.length !== 0) {
    return res
      .status(400)
      .json({ success: false, message: `Already Student exists with email ${email}` });
  }
  const result = await saveStudents(req.body);
  return res.status(200).json(result);
}

async function updateStudent(req, res) {
  const studentId = req.params.studentID;
  if (!studentId) {
    return res.status(400).json({ success: false, message: `Student ID is Required.` });
  }
  const body = req.body;
  if(Object.keys(body).length == 0) {
    return res.status(400).json({ success: false, message: `Body Should not empty.` });
  }
  const result = await modifyStudents(studentId, body);
  return res.status(200).json(result);
}

async function deleteStudent(req, res) {
  const studentId = req.params.studentID;
  if (!studentId) {
    return res.status(400).json({ success: false, message: `Student ID is Required.` });
  }
  const student = await fetchStudent({ _id: studentId });
  if (student.length == 0) {
    return res.status(400).json({ success: false, message: `No Students Found.` });
  }
  const result = await removeStudents(studentId);
  if (result && result._id) {
    return res.status(200).json({ success: true, message: `Student Deleted Successfully.` });
  } else {
    return res
      .status(400)
      .json({ success: false, message: `Unable to Delete Student. Please try again.` });
  }
}

module.exports = {
  getStudents,
  getStudentByID,
  createStudent,
  updateStudent,
  deleteStudent,
};
