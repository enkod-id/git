const path = require('path');
const express = require('express');
const app = express();
const databaseMiddleware = require('./middleware/db-middleware');
const blogRouter = require ('./routes/blog-route.js')
const bodyParser = require('body-parser')
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(databaseMiddleware);

app.use('/blog', blogRouter)


app.get('/', async (req, res) => {
    try {
        const blogs = await req.db.collection('blogs').find().toArray();
        res.render('index', { data: blogs });
    } catch (error) {
        console.error(error);
        res.status(500).send('error');
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})


