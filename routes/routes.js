const express = require('express');
const router = express.Router()
const { executeCommands } = require('../controllers/commandController')

module.exports = router;

/**
 * executeCommand post method router
 */
router.post('/executeCommand', executeCommands)

