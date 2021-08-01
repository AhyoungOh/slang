const express = require('express');
const cors = require('cors');
const app = express();
const port = 80;
const apiRouter = require('./src/routers');

const userRouter = require('./src/middleware/user');
const { connect: dbConnect } = require('./src/models');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

dbConnect();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// front에는 user 정보를 cookie에 담고
// back에는 user 정보를 session에 담아 쓰기 위한 설정
const cookieSession = require('cookie-session');
app.use(
  cookieSession({
    name: 'session',
    keys: ['secretValue'],
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use('/api', apiRouter);
app.get('/', (req, res) => {
  res.render('index.html');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
