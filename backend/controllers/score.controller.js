const Score = require('../models/user.model');

module.exports.saveScore = async (req, res) => {
  await Score.create(req.body).catch(err => {
    res.status(500).send('Failed with internal server error')
  })
  res.status(200).send(req.body)
}