const router = require('express').Router();
const path = require('path');

// defing the route that send response to index.html when GET request is made
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//defing the route that send response to note.html when GET request is made
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/note.html'))
});

module.exports = router;