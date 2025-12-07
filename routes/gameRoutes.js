const express = require('express');
const router = express.Router();
const config = require('../config/gameConfig');

// POST route to check the code
router.post('/check-code', (req, res) => {
    const userCode = req.body.code;

    console.log(`[LOG] User attempted code: ${userCode}`);

    // Compare user input with the secret config
    if (userCode === config.SECRET_CODE) {
        // Success! Send a "true" flag back
        res.json({ success: true, message: "Code Accepted" });
    } else {
        // Fail! Send a "false" flag back
        res.json({ success: false, message: "Invalid Code" });
    }
});

module.exports = router;