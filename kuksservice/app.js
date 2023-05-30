const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config();
const indexRouter = require('./routes');

const app = express();
app.set('port', process.env.PORT || 4040);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});

app.use(morgan('dev'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));

app.use('/', indexRouter);

console.log("404 Error 전")
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} do not exist.`);
    error.status = 404;
    console.log("404 Error 탐")
    next(error);
    console.log("404 Error 탔음")
});
console.log("404 Error 안탐")


app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), 'port is wating...');
})