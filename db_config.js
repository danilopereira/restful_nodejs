var db_string = 'mongodb://127.0.0.1/mean';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind("Erro de conexão com o banco"));

db.once('open', function(){
	//create table no mongodb
	var userSchema = mongoose.Schema({
		fullname: String,
		email: String,
		pass: String,
		created_at: Date
	});

//model do mongoose para crud
	exports.User = mongoose.model('User', userSchema);
});
