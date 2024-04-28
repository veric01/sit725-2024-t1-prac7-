const express = require('express');
const router = express.Router();
const topicController = require('../controllers/controller');

router.get('/api/topics', topicController.getTopics);
router.post('/api/topics', topicController.createTopic);

module.exports = router;