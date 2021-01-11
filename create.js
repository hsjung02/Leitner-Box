const express = require('express');
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hyunseo02',
    database: 'poapper_backend'
});
const router = express.Router();
module.exports = router;

router.get('/',(req,res)=>{ //move to create section
    res.sendFile(__dirname + "/views/create.html");
})

router.post('/',(req,res)=>{ //get user input(word and meaning), and save it on database
    const body = req.body;
    db.query(`INSERT INTO words (eng, kor) VALUES ('${body.eng}','${body.kor}')`,(err, results)=>{
        if(err) throw err;
        box[0].push(body.eng);
        res.redirect(301,"/"); //and then we will move back to main menu
    })
})