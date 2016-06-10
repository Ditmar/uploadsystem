import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	// publish specifications server 
	
	Meteor.publish('parcialLabs', function (id_matter,active) {
		return LABS.find({id_matter:id_matter,active:active});
	});
	Meteor.publish('totalLabs', function() {
		return LABS.find();
	})
	Meteor.publish('matters', function() {
		return MATTERS.find();
	});
	Meteor.publish("studentslabs", function(idLab) {
		return ESTUDENTS_LABS.find({idLab:idLab});
	});
	Meteor.publish("getUsers",function() {
		return Meteor.users.find();
	})
	// Meteor Methods

	Meteor.methods({
		"matter.register": function (obj) {
			console.log("work");
			MATTERS.insert(obj);
		},
		"lab.register": function (obj) {
			LABS.insert(obj);
		},
		"lab.send": function (obj) {
			ESTUDENTS_LABS.insert(obj);
		},
		"lab.deleteLab": function(id) {
			LABS.remove({_id:id});
		}
	});

	// upload server

	UploadServer.init({
		tmpDir: process.env.PWD + "/.uploads/tmp",
		uploadDir: process.env.PWD + "/.uploads",
		checkCreateDirectories: true,
		finished: function(fileInfo, formFields) {
		console.log("server!")
	}
	}

	);

});
