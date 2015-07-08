//solicita o express
var express = require('express');

//extends app de express
var app = module.exports = express();

//solicita o modulo body-parser
var bodyParser = require("body-parser");

var allowCors = function(req, res, next){
	
};

//Porta do serviço
app.listen(5000);

//configurações do body-parser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended : true
}));
