const express = require('express');
const app = express();

//와일드카드
app.get('/:blog/:id', (req, res, next) => {
    console.log('get으로 요청이 들어왔습니다!');
    console.log(req.params);

    console.log('/:blog/:id 요청이 들어왔습니다!');
    console.log(req.params.blog);
    console.log(req.params.id);
    res.send(`req.params.blog : ${req.params.blog}, req.params.id : ${req.params.id}`);
});
app.listen(8080);