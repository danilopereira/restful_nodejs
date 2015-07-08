var app = require('./app_config.js');

var validator = require('validator');

var userController = require('./controller/user_controller.js')

app.get('/', function(req, res){

});

app.get('/users', function(req, res){
	userController.list(function(resp){
		res.json(resp);
	});
});

app.get('/users/:id', function(req, res){
	var id = validator.trim(validator.escape(req.param('id')));
	userController.list(id, function(resp){
		res.json(resp);
	});
});

app.post('/users', function(req, res){
	var fullname = validator.trim(validator.escape(req.param('fullname')));
	var email = validator.trim(validator.escape(req.param('email')));
	var pass = validator.trim(validator.escape(req.param('pass')));

	userController.insert(fullname, email, pass, function(resp){
		res.json(resp);
	});
});

app.put('/users', function(req, res){
	var fullname = validator.trim(validator.escape(req.param('fullname')));
	var email = validator.trim(validator.escape(req.param('email')));
	var pass = validator.trim(validator.escape(req.param('pass')));
	
	userController.update(function(resp){
		res.json(resp);
	});
});

app.delete('/users/:id', function(req, res){
	var id = validator.trim(validator.escape(req.param('id')));

	userController.delete(id, function(resp){
		res.json(resp);
	});
});

