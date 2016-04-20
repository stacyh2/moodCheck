
var express    = require('express'),
  app          = express(),
  watson       = require('watson-developer-cloud');
app.listen(3000);

var toneAnalyzer = watson.tone_analyzer({
  url: 'https://gateway.watsonplatform.net/tone-analyzer-beta/api/',
  username: 'e5c64c08-8993-492b-ae49-baba98c7865b',
  password: '6rfx2ArnKjW7',
  version_date: '2016-11-02',
  version: 'v3-beta'
});


app.use(express.static('public'));
app.use(express.static('node_modules'));


app.get('/get', function(req, res, next) {
  toneAnalyzer.tone(req.body,
  function(err, tone) {
    if (err)
      next(err);
    else
      res.send(JSON.stringify(tone, null, 2));
});
});







