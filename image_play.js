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

var imgidx=0;
var imgbox = [[],[],[],[],[]];

db.query(`SELECT image FROM images`, (err, result)=>{ //데이터베이스에서 단어들 가져오기
    if(err) throw err;
    for(var key in result){
        imgbox[0].push(result[key].image);
    }
})

router.get('/',(req,res)=>{
    new Promise((resolve, reject)=>{
        imgidx = 0;
        imgbox = [[],[],[],[],[]];
        db.query(`SELECT image FROM images`, (err, result)=>{ //데이터베이스에서 단어들 가져오기
            if(err) throw err;
            for(var key in result){
                imgbox[0].push(result[key].image);
            }
            resolve();
        })
    }).then(()=>{
    res.render('imgplay',{imgbox_num:String(imgidx+1), imgbox1_length: String(imgbox[0].length), imgbox2_length:String(imgbox[1].length),imgbox3_length:String(imgbox[2].length),imgbox4_length:String(imgbox[3].length),imgbox5_length:String(imgbox[4].length), img_source:'http://localhost:8080/'+imgbox[imgidx][0]+'.jpg',ans:'정답_확인하기'});
    })
})

router.post('/imgidx/:imgidx',(req,res)=>{
    imgidx = parseInt(req.params.imgidx);
    res.render('imgplay',{imgbox_num:String(imgidx+1), imgbox1_length: String(imgbox[0].length), imgbox2_length:String(imgbox[1].length),imgbox3_length:String(imgbox[2].length),imgbox4_length:String(imgbox[3].length),imgbox5_length:String(imgbox[4].length), img_source:'http://localhost:8080/'+imgbox[imgidx][0]+'.jpg',ans:'정답_확인하기'});
})

router.post('/flip',(req,res)=>{
    res.render('imgplay',{imgbox_num:String(imgidx+1), imgbox1_length: String(imgbox[0].length), imgbox2_length:String(imgbox[1].length),imgbox3_length:String(imgbox[2].length),imgbox4_length:String(imgbox[3].length),imgbox5_length:String(imgbox[4].length), img_source:'http://localhost:8080/'+imgbox[imgidx][0]+'.jpg',ans:imgbox[imgidx][0]});
})

router.post('/succ',(req,res)=>{
    if(imgidx == 4){
        delete_card(imgbox[imgidx][0]);
        imgbox[imgidx].shift();
        if(imgbox[imgidx].length == 0){
            imgidx = 0;
            res.render('imgplay',{imgbox_num:String(imgidx+1), imgbox1_length: String(imgbox[0].length), imgbox2_length:String(imgbox[1].length),imgbox3_length:String(imgbox[2].length),imgbox4_length:String(imgbox[3].length),imgbox5_length:String(imgbox[4].length), img_source:'http://localhost:8080/'+imgbox[imgidx][0]+'.jpg',ans:'정답_확인하기'});
        }
    }
    else{
        imgbox[imgidx+1].push(imgbox[imgidx].shift());
        if(imgbox[imgidx].length == 0)res.render('imgplay',{imgbox_num:String(imgidx+1), imgbox1_length: String(imgbox[0].length), imgbox2_length:String(imgbox[1].length),imgbox3_length:String(imgbox[2].length),imgbox4_length:String(imgbox[3].length),imgbox5_length:String(imgbox[4].length), img_source:'이 칸은 빈 칸입니다',ans:'빈_칸입니다'});
        else res.render('imgplay',{imgbox_num:String(imgidx+1), imgbox1_length: String(imgbox[0].length), imgbox2_length:String(imgbox[1].length),imgbox3_length:String(imgbox[2].length),imgbox4_length:String(imgbox[3].length),imgbox5_length:String(imgbox[4].length), img_source:'http://localhost:8080/'+imgbox[imgidx][0]+'.jpg',ans:'정답_확인하기'});

    }
})

router.post('/fail',(req,res)=>{
    imgbox[0].push(imgbox[imgidx].shift());
    if(imgbox[imgidx].length == 0){
        imgidx = 0;
    }
    res.render('imgplay',{imgbox_num:String(imgidx+1), imgbox1_length: String(imgbox[0].length), imgbox2_length:String(imgbox[1].length),imgbox3_length:String(imgbox[2].length),imgbox4_length:String(imgbox[3].length),imgbox5_length:String(imgbox[4].length), img_source:'http://localhost:8080/'+imgbox[imgidx][0]+'.jpg',ans:'정답_확인하기'});
})

function delete_card(image){ //DELETE 함수
    db.query(`DELETE FROM images WHERE image = '${image}'`,(err,result)=>{
        if(err)throw err;
    })
}