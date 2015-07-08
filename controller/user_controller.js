var db = require('../db_config.js');

exports.list = function(callback){
	db.User.find({}, function(error, users){
		if(error){
			callback({error : 'Não foi possivel retornar os usários'});
		}else{
			callback(users);
		}
	});
};

exports.user = function(id, callback){
	db.User.findById(id, function(error, user){
		if(error){
			callback({error : 'Não foi possivel retornar os usários'});
		}else{
			callback(user);
		}
	});
};

exports.insert = function(fullname, email, pass,callback){
	new db.User({
		'fullname' : fullname,
		'email' : email,
		'pass' : pass,
		'created_at': new Date()
	}).save(function(error, user){
		if(error){
			callback({error : 'Não foi possivel salvar o usário'});
		}else{
			callback(user);
		}
	});
};

exports.delete = function(id, callback){
	db.User.findById(id, function(error, user){
		if(error){
			callback({error : 'Não foi possivel retornar os usários'});
		}else{
			db.User.remove(function(error){
				if(!error){
					callback({response : 'Usuário excluido com sucesso!'});
				}
			});
		}
	});
};

exports.update = function(fullname, email, pass, callback){
	db.User.findById(id, function(error, user){
		if(fullname){
			db.User.fullname = fullname;
		}
		if(email){
			db.User.email = email;
		}
		if(pass){
			db.User.pass = pass;
		}

		db.User.save(function(error, user){
			if(error){
				callback({error : 'Não foi possivel salva o usário'});
			}
			else{
				callback(user)
			}
		});
	});
};