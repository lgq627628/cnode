var mongoose = require('../mongoose_helper').mongoose;

var UserSchema = new mongoose.Schema({
	username: String,
	pass: String,
	email: String
});

UserSchema.statics.getUserBySignupInfo = function(username, callback){
	this.find({username: username}, callback);
};

UserSchema.statics.addUser = function(user, callback){
	this.create(user, callback);
};

UserSchema.statics.getUser = function(username, pass, callback){
	this.findOne({username: username, pass: pass}, callback);
};

module.exports = mongoose.model('User', UserSchema);