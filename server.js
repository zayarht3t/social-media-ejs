const express = require('express');
const app = express();
const path = require('path');
const LoginRoute = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth',LoginRoute);

app.listen(8000,()=>{
    console.log(`server listening on localhost:8000`);
})