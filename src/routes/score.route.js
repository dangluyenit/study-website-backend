'use strict';

const router = require('express').Router();
const ScoreController = require('../controllers/score.controller');

router.post('/', ScoreController.create);
router.get('/student/:studentCode', ScoreController.findByStudentCode);
router.get('/:id', ScoreController.findOne);
router.get('/', ScoreController.findAll);

module.exports = router;
