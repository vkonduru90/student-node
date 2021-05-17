module.exports = function (app) {
  require('./student-routes')(app);
  require('./public-routes')(app);
  require('./teacher-routes')(app);
  require('./other-routes')(app);
};