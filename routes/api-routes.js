const router = require ('express').Router();
const {v4: uuidv4} = require('uuid');
const fs = require ("fs");

//defines the get requets to this routes end point 'api/notes'
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parsel(fs.readFileSync("db/db.json","utf8"));
    res.json(dbJson);
});

//defines the post request to this routes end point 'api/note'
router.post('/api/notes', async (req, res) => {
    const dbJson = await JSON.parsel(fs.readFileSync("db/db.json","utf8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
    res.json(dbJson);
});

//delete request to routes end point '/api/notes/:id'
router.delete('/api/notes/:id', (res,req) =>{
   let data = fs.readFileSync("db/db.json", "utf8");
   const dataJSON = JSON.parse(data);
   const newNotes = dataJSON.filter((notes) => {
    return notes.id !== req.params.id;
   });
   fs.writeFileSync("db/db.json", JSON.stringify(newNotes));
   res.json("Note deleted");
});

module.export = router;