var mongoose = require('../mongoose_helper').mongoose;

var TopicSchema = new mongoose.Schema({
	title: String,
	username: String,
	tab: String,
	content: String,
	insertTime: Date
});

TopicSchema.statics.addTopic = function(topic, callback){
	this.create(topic, callback);
};

TopicSchema.statics.getTopics = function(query, option, callback){
	this.find(query, {}, option, callback);	
};

TopicSchema.statics.getTopic = function(id, callback){
	this.findOne({_id: id}, callback);	
};

module.exports = mongoose.model('Topic', TopicSchema);