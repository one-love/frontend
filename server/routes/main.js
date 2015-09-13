import express from 'express';

let router = express.Router();

router.get('/sample', function(req, res) {
  res.render('sample.hbs', {
      one: "Hello",
      two: "World"
    });
});

export default router;

