const express = require('express');
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hyunseo02',
    database: 'poapper_backend'
});
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null, 'images/');
    },
    filename: (req,file, callback)=>{
        callback(null, file.originalname);
    }
});
const uploader = multer({storage:storage});
const fs = require('fs');
const router = express.Router();
module.exports = router;

router.get('/',(req,res)=>{ //원하는 카드를 생성하고 싶을 때
    res.sendFile(__dirname + "/views/create_image.html");
})

router.post('/',uploader.single('img'),(req,res)=>{ //영단어와 뜻을 입력받아 데이터베이스에 저장
    fs.renameSync(__dirname+'/images/'+req.file.originalname,__dirname+'/images/'+req.body.mean+'.jpg');
    db.query(`INSERT INTO images (image) VALUES ('${req.body.mean}')`,(err,result)=>{
        if(err)throw err;
    })
    res.redirect(301,'/');
})