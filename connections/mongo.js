const mongoose = require('mongoose');

(function () {
  mongoose.connect('mongodb://localhost:27017/student', (err) => {
    if (err) {
      console.log(`Error in DB Connection....`, err);
    } else {
      console.log('DB Connected Successfully...');
    }
  });
}());
