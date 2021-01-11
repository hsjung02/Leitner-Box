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

var idx = 0; //placing on which cell, of the leitner box
var box = [[],[],[],[],[]]; //leitner box

db.query(`SELECT eng FROM words`, (err, result)=>{ //load all words from database
    if(err) throw err;
    for(var key in result){
        box[0].push(result[key].eng);
    }
})



router.get('/',(req,res)=>{ //start learning
    new Promise((resolve, reject)=>{
        idx = 0;
        box = [[],[],[],[],[]];
        db.query(`SELECT eng FROM words`, (err, result)=>{
            if(err) throw err;
            for(var key in result){
                box[0].push(result[key].eng);
            }
            resolve();
        })
    }).then(()=>{
    res.render('play',{box_num:String(idx+1), box1_length: String(box[0].length), box2_length:String(box[1].length),box3_length:String(box[2].length),box4_length:String(box[3].length),box5_length:String(box[4].length), word:box[idx][0]});
    })
})

router.post('/idx/:idx',(req,res)=>{ //when we want to move to another cell
    idx = parseInt(req.params.idx);
    res.render('play',{box_num:String(idx+1), box1_length: String(box[0].length), box2_length:String(box[1].length),box3_length:String(box[2].length),box4_length:String(box[3].length),box5_length:String(box[4].length), word:box[idx][0]});
})

router.post('/flip',(req,res)=>{ //when we want to check the answer for the word
    db.query(`SELECT kor FROM words WHERE eng = '${box[idx][0]}'`, (err,result)=>{
        if(err)throw err;
        res.render('play',{box_num:String(idx+1), box1_length: String(box[0].length), box2_length:String(box[1].length),box3_length:String(box[2].length),box4_length:String(box[3].length),box5_length:String(box[4].length), word:result[0].kor});
    })
})

router.post('/succ',(req,res)=>{ //when we got it correct
    if(idx == 4){ //if the word was on the last cell
        delete_word(box[idx][0]); //we will emit the word from the box, delete from database
        box[idx].shift();
        if(box[idx].length == 0){ //if the last cell is empty, we will bring it back to the first cell
            idx = 0;
            res.render('play',{box_num:String(idx+1), box1_length: String(box[0].length), box2_length:String(box[1].length),box3_length:String(box[2].length),box4_length:String(box[3].length),box5_length:String(box[4].length), word:box[idx][0]});
        }
    }
    else{ //else
        box[idx+1].push(box[idx].shift()); //the word will move to the next cell
        if(box[idx].length == 0)res.render('play',{box_num:String(idx+1), box1_length: String(box[0].length), box2_length:String(box[1].length),box3_length:String(box[2].length),box4_length:String(box[3].length),box5_length:String(box[4].length), word:'이 칸은 빈 칸입니다'});
        else res.render('play',{box_num:String(idx+1), box1_length: String(box[0].length), box2_length:String(box[1].length),box3_length:String(box[2].length),box4_length:String(box[3].length),box5_length:String(box[4].length), word:box[idx][0]});

    }
})

router.post('/fail',(req,res)=>{ //when we got it wrong
    box[0].push(box[idx].shift()); //the word will move back to the first cell
    if(box[idx].length == 0){ //if the cell is empty, we will bring it back to the first cell
        idx = 0;
    }
    res.render('play',{box_num:String(idx+1), box1_length: String(box[0].length), box2_length:String(box[1].length),box3_length:String(box[2].length),box4_length:String(box[3].length),box5_length:String(box[4].length), word:box[idx][0]});
})

function delete_word(eng){ //delete word from database
    db.query(`DELETE FROM words WHERE eng = '${eng}'`,(err,result)=>{
        if(err)throw err;
    })
}