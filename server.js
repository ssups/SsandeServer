const express = require('express');
const app = express();
const PORT = '82';
const cors = require('cors');
const path = require('path');

app.use(cors({ origin: ['http://nft.ssups.shop', 'https://nft.ssups.shop'] }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'src/json')));

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  const time = new Date();
  console.log(
    `ssande 페이지 접속,
    시간: ${time.getMonth() + 1} / ${time.getDate()} - ${(time.getHours() + '').padStart(2, 0)}:${(
      time.getMinutes() + ''
    ).padStart(2, 0)}`
  );
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.use(express.static(path.join(__dirname, 'build')));
// 이거만 있어도 클라이언트가 기본 '/'url 접속시 얘가 알아서 build폴더에 있는 index.html을 실행시켜줌
// 그래서 이걸 위에 app.get('/')위에두면 app.get('/')이게 실행이 안됨

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Ssanade ${PORT}번 포트에 열림`);
});

module.exports = app;
