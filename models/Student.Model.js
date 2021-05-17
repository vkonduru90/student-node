const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  rollNumber: { type: Number, required: true },
  role: { type: String },
  // classTeacher: { type : mongoose.Schema.Types.ObjectId, ref: 'Teachers'},
  classmates: { type: mongoose.Schema.Types.ObjectId, ref: 'Students' },
  isActive: { type: Boolean, default: true },
  dateCreated: { type: Date, default: Date.now },
});

const Students = mongoose.model('Students', studentSchema, 'Students');

module.exports = Students;
