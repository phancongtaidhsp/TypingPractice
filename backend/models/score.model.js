var mongoose = require('mongoose')

var scoreSchema = new mongoose.Schema({
  user_name: String,
  lesson_name: String,
  score: Number,
})

var Score = mongoose.model('Score', scoreSchema, 'scores')

module.exports = Score;