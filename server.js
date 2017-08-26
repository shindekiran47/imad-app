var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express(); 
app.use(morgan('combined'));

var articals = {
    'artical-one' : {
    title: 'artical-one',
    heading: 'Artical one',
    date: 'sep 5 2015',
    content: `
            <p>
                is artical one this is artical 
                one this is artical one one this is artical oneone this is artical oneone this is artical one
            </p>
               
            <p>
                this is artical one  this is artical one this is artical one this is artical 
                one this is artical one one this is artical oneone this is artical oneone this is artical one
            </p>`
    },
    'artical-two' : { title: 'artical-Two',
    heading: 'Artical Two',
    date: 'may 5 2017',
    content: `
            <p>
                this is artical two
            </p>
               
            <p>
                this is artical one  this is s is artical oneone this is artical oneone this is artical one
            </p>`},
    'artical-three' : { title: 'artical-Three',
    heading: 'Artical three',
    date: 'jan 6 2017',
    content: `
            <p>
                this is artical Three  this is artical one this is artical one this is artical 
                one this is artical one one this is artical oneone this is artical oneone this is artical one
            </p>`
               
            }
};

function createTemplate (data) {
        var title = data.title;
        var date = data.date;
        var heading = data.heading;
        var content = data.content;

        var htmlTemplate = `
<html>
    <head>
        <title> 
            ${title}
        </title>
        <meta name="viewport" containt="width=device=width, intial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container" >
            <div>
                <a href= "/">HOME</a> 
            </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </div>
    </body>
</html> 
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

appp.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:articalName', function (req, res) {
    //articalName == artical-one
    var articalName = req.params.articalName;
    res.send(createTemplate(articals[articalName]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
