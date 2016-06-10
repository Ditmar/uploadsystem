LABS = new Mongo.Collection("labs");
MATTERS = new Mongo.Collection("matters");
ESTUDENTS_LABS = new Mongo.Collection("estudents_labs");
MATTERS.allow({
	insert: function (userId, doc) {
		return true;
	}
});
if (Meteor.isClient) {
	var studentSchema = new SimpleSchema({
		idUs: {
			type: String,
			label: "Id  users accounts"
		},
		urlfiles: {
			type: String,
			label: "Files data"
		},
		idLab: {
			type: String,
			label: "id labs collections"
		}
	});
	var labsSchema = new SimpleSchema({
			name: {
				type: String,
				label: "Name Labs"
			},
			description: {
				type: String,
				label: "Descripcion Labs"
			},
			current_date: {
				type: Date,
				label: "current date",
				autoValue: function() {
					return new Date();
				}
			},
			urlPdf: {
				type: String,
				label: "url of the pdf instruccions"
			},
			urlFile: {
				type: String,
				label: "url of the files"
			},
			active: {
				type: Boolean,
				label: "Active lab"
			},
			id_matter: {
				type: String,
				label: "foreign key of  matter"
			},
			active: {
				type: Boolean,
				label: "Active matter"
			}
	});
	var matterSchema = new SimpleSchema({
			name: {
				type: String,
				label: "Matter name"
			},
			code: {
				type: String,
				label: "Code"
			}
	});
	ESTUDENTS_LABS.helpers({
		name(){
			// idLab
			//console.log(Meteor.users.find().fetch())
			return Meteor.users.findOne({_id:this.idUs}).profile["first-name"];	
		}
	});
	ESTUDENTS_LABS.attachSchema(studentSchema);
	LABS.attachSchema(labsSchema);
	MATTERS.attachSchema(matterSchema);	
}