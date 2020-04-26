var express = require('express');
var router = express.Router();
router.use(express.json());

var ADRESSE;
var CHANGE = "0";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/hallo', function(req, res, next) {
  res.send("selber hallo");
});

/* GET users listing. */
router.get('/unsichtbar', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = "http://ai-info.informatik.hs-fulda.de:443/htdocs/unsichtbar.html";
  res.send("ok: unsichtbar");
});

/* GET users listing. */
router.all('/dekan', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = "http://ai-info.informatik.hs-fulda.de:443/htdocs/person.html";
  res.send("ok: dekan");
});

/* GET users listing. */
router.all('/ssc', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = "http://ai-info.informatik.hs-fulda.de:443/htdocs/index.html";
  res.send("ok: ssc");
});

/* GET users listing. */
router.all('/datenbank', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = req.body.obj.modul;
  res.send("ok: datenbank");
});

/* GET users listing. */
router.get('/zeitenBib', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = "http://ai-info.informatik.hs-fulda.de:443/htdocs/oeffnungszeiten.html";
  res.send("ok: zeitenBib");
});

/* GET users listing. */
router.get('/vorlesung', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = "http://ai-info.informatik.hs-fulda.de:443/htdocs/vorlesung.html";
  res.send("ok: vorlesung");
});


/* GET users listing. */
router.get('/adresse', function(req, res, next) {
  CHANGE = "0";
  console.log(CHANGE);
  console.log(ADRESSE);
  res.send(ADRESSE);
});

/* GET users listing. */
router.get('/change', function(req, res, next) {
  console.log(CHANGE);
  res.send(CHANGE);
});

/* GET users listing. */
router.get('/prof', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = "prof.html";
  res.send(ADRESSE);
});



module.exports = router;
