'use strict';

const router = require('express').Router();
const questionAnswerController = require('../controllers/question-answer.controller');

router.post('/', questionAnswerController.create);
router.get('/:id', questionAnswerController.findOne);
router.get('/', questionAnswerController.findAll);

module.exports = router;
