const express = require('express');
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hyunseo02',
    database: 'poapper_backend'
});
const fs = require('fs');
const router = express.Router();
module.exports = router;

router.get('/',(req,res)=>{ //when we want to show all image in the box
    var header = fs.readFileSync("./views/view_header.html", "utf8");
    res.write(header);
    new Promise((resolve, reject)=>{
        db.query(`SELECT * FROM images`, (err, result)=>{
            if(err) throw err;
            var temp=''
            for(var key in result){
                temp+=`<tr><td>${result[key].id}</td><td><img src='http://localhost:8080/images/${result[key].image}.jpg'></td><td>${result[key].image}</td></tr>`; //load all words from database, insert each of them in a table
            }
            res.write(temp);
            resolve();
        })
    }).then(()=>{
        var footer = fs.readFileSync("./views/view_footer.html", "utf8");
        res.write(footer);
        res.end();
    })
})