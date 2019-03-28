var express = require('express');
var router = express.Router();
const { Cat } = require('../models');

router.get('/', async function(req, res) {

  if (req.query.hasOwnProperty('id')) {

    const cat = await Cat.findOne({
      id: req.query["id"]
    });

    if (cat){
      res.json({
          cat : {
            name: cat.name,
            hp: cat.hp,
            attack: cat.attack,
            defence: cat.defence,
            exp: cat.exp,
            level: cat.level
          }
        }
      );
    } else {

    }

  } else {
    res.statusCode = 400;
    res.json({ "e" : "id filed is incorrect"});
  }
});

router.post('/check', async function(req, res) {

  if (req.body.hasOwnProperty('id')) {

    let login = true;

    const cat = await Cat.findOne({
      id: req.body["id"]
    });

    if (!cat) {
      const newCat = new Cat({
        id: req.body["id"]
      });
      await newCat.save();

      login = false
    }

    res.json({
      login : login
    });

  } else {
    res.statusCode = 400;
    res.json({ "e" : "id filed is incorrect"});
  }
});

router.post('/add', async function(req, res) {

  if (req.body.hasOwnProperty('id') && req.body.hasOwnProperty('name')) {

    await Cat.findOneAndUpdate({
        id: req.body["id"]
      },{
      name: req.body["name"],

    });

    res.sendStatus(200);
  } else {
    res.statusCode = 400;
    res.json({ "e" : "Send id and name"});
  }
});

module.exports = router;
