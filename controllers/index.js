/**
 * do something with the user model
 * var User = require('../models/user');
 */
var app = express();

app.set('port', (process.env.PORT || 5000));
  app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

exports.index = function (req, res) {
  res.render('index', {
    title: 'jeredcade'
  });




};
