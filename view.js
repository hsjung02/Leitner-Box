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

router.get('/',(req,res)=>{ //when we want to show all word in the box
    new Promise((resolve, reject)=>{
        var header = fs.readFileSync("./views/view_header.html", "utf8"); 
        res.write(header);
        resolve();
    }).then(()=>{
        new Promise((resolve, reject)=>{
            db.query(`SELECT * FROM words`, (err, result)=>{ //load all words from database, insert each of them in a table
                if(err) throw err;
                var temp=''
                for(var key in result){
                    temp+='<tr><td>'+result[key].id+'</td><td>'+result[key].eng+'</td><td>'+result[key].kor+'</td></tr>'
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
})