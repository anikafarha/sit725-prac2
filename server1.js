var express = require('express')
var app = express()
 //storing data into the array 
let accounts = [ {id:1,name: 'alex',deposit:5},
                 {id:2,name: 'sarah',deposit:5},
                 {id:3,name: 'jim' ,deposit: 15}
                ]
                //retrive data from the array
app.get('/', function (req, res)
{
 app.send(accounts);

})