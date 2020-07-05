const Score = require('../models/score.model');
const User = require('../models/user.model');

module.exports.saveScore = async (req, res) => {
  var score = {
    user_id: req.body.userId,
    lesson_id: req.body.lesson_id,
    score: req.body.score
  }
  Score.findOne({user_id: score.user_id}, (err, doc) => {
    if(doc){
      doc.score = score.score
      doc.save(() => res.status(200).send(doc))
    }
    else{
      Score.create(score).then(doc => {
        res.status(200).send(doc)
      }).catch(err => res.status(500).send('Failed with internal server error'))
    }
  })
}

module.exports.getRankByLessonId = async (req, res) => {
  var lesson_id = req.params.id
  var scores = await Score.find({lesson_id: lesson_id})

  if(scores.length > 1){
    scores.sort((a,b) => {
      return parseInt(b.score) - parseInt(a.score)
    })
  }
  if(scores.length > 4) scores = scores.slice(0,4)
  var result = scores.map(async score => {
    return await User.findById(score.user_id, function (err, doc) {
      if(doc)
        return { username: doc.username, score: score.score }
    })
  })
  Promise.all(result).then((values) => {
    res.status(200).send(values)
  })
}