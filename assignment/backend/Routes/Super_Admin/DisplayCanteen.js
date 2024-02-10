const express = require('express');
const router = express.Router();

router.get('/shopData', async (req, res) => {
    try {
        res.send([global.shops]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;