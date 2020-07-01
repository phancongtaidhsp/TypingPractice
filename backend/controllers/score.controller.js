const Score = require('../models/score.model');
const User = require('../models/user.model');

module.exports.saveScore = async (req, res) => {
  var score = {
    user_id: req.body.userId,
    lesson_id: req.body.lesson_id,
    score: req.body.score
  }
  await Score.create(score).catch(err => {
    res.status(500).send('Failed with internal server error')
  })
  res.status(200).send('Save successful')
}

module.exports.getRankByLessonId = async (req, res) => {
  var lesson_id = req.body.params.id;
  Score.find({lesson_id: lesson_id}).then(scores => {
    scores.sort((a,b) => {
      return parseInt(b.score) - parseInt(a.score)
    })
    if(scores.length > 4) scores = scores.slice(0,4)
    var result = scores.map(score => {
      User.findById(score.id, function (err, doc) {
        if (err){
          res.status(500).send('Failed with internal server error')
        }
        else if(!doc) res.status(400).send('Failed with invalid input parameter')
        else{
          return { username: doc.username, score: score.score }
        }
      })
    })
    res.status(200).send(result);
  },error => {
    res.status(500).send(error);
  })
}