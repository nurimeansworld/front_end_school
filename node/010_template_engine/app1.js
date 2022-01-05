// npm init --yes
// npm i nunjucks express
// npm i nodemon --save-dev
// -> nodemon app1 으로 실행 가능

const nunjucks = require('nunjucks');
const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'html');

nunjucks.configure('template', {
    autoescape: true,
    express: app,
    watch: true
});

app.get('/', (req, res, next) => {
    res.render('test1.html', {name : "hojun", age:10});
})

app.listen(8080);