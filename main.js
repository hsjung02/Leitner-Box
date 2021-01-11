//====================모듈 export==================//
const express = require('express');
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hyunseo02',
    database: 'poapper_backend'
});
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine','ejs');
app.use(express.static('images'));
const playRouter = require('./play.js');
app.use('/play',playRouter);
const createRouter = require('./create.js');
app.use('/create_card', createRouter);
const viewRouter = require('./view.js');
app.use('/view_cards', viewRouter);
const imgplayRouter = require('./image_play.js');
app.use('/img_play',imgplayRouter);
const imgcreateRouter = require('./create_img.js');
app.use('/create_imgcard', imgcreateRouter);
const imgviewRouter = require('./view_img.js');
app.use('/view_imgcards', imgviewRouter);
//====================모듈 export 끝==============//





app.get('/',(req,res)=>{ //main menu
    res.sendFile(__dirname + '/views/start.html')
})

app.listen(8080,()=>console.log("server running on port 8080"))
