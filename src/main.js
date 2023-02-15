const port = 3000;
import express from 'express';
import { engine } from 'express-handlebars';
import route from './routes/index.js';

const app = express();

app.use(express.static('src/public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.engine('hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

route(app);

app.listen(port, () => {
    console.log("App is listening on port 3000");
})
