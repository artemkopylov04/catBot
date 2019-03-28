const mongoose = require('mongoose');
const { Schema } = mongoose;


mongoose.connect('mongodb://localhost/catbot', {
  useNewUrlParser: true
}).then(
  () => {
    console.log('DB connected');
  },
  err => {
    console.log(err);
  }
);

const CatSchema = new Schema({
  id: Number,
  name: String,
  hp: {
    type: Number,
    default: 100
  },
  attack: {
    type: Number,
    default: 0
  },
  defence: {
    type: Number,
    default: 0
  },
  exp: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
});

const Cat = mongoose.model('cat', CatSchema);

module.exports = { Cat };
