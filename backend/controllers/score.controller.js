const Score = require('../models/user.model');

module.exports.saveScore = async (req, res) => {
  var score = {
    user_id: req.signedCookies.userId,
    lesson_id: req.body.lesson_id,
    score: req.body.score
  }
  await Score.create(score).catch(err => {
    res.status(500).send('Failed with internal server error')
  })
  res.status(200).send('Save successful')
}