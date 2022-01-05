const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    console.log('get으로 요청이 들어왔습니다!');
    console.log(req.body);
    res.send('get!!');
});
app.post('/', (req, res, next) => {
    console.log('post으로 요청이 들어왔습니다!');
    console.log(req.body);
    res.send('post!!');
});

app.listen(8080);