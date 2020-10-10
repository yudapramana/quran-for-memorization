const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const path = require('path');

// Constants
// const PORT = 8080;
// const HOST = '0.0.0.0';

const PORT = 3000;
const HOST = 'localhost';

const CONNECTION_URL = "mongodb+srv://yudapramana:palisotabracteosa772@cluster0.ui7dx.gcp.mongodb.net/quran_memorizations?retryWrites=true&w=majority";
const DATABASE_NAME = "quran_memorizations";

var app = Express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// Define for API
var database, collection;

// Test Cookies
app.get('/test', function(req, res){
    res.cookie('name', 'express').send('cookie set'); //Sets name = express
});

// Hello World
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './routes/index.html'));
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, './routes/test.html'));
})

// Get Pages
app.get("/pages", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(200).send(error);
        }
        response.send(result);
    });
});

// Get Specific Page
app.get("/page/:pageid", (request, response) => {
    var pageid = Number(request.params.pageid);
    response.cookie('page_id', pageid, {expire: 3600000 + Date.now()});

    collection.findOne({ page_id: pageid }).then((error, result) => {
        if(error) {
            return response.status(200).send(error);
        }
        console.log(result);
        response.send(result);
    });
});

app.listen(PORT, HOST, () => {
    
    MongoClient.connect(CONNECTION_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("pages");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

app.use(Express.static(__dirname + '/public'));