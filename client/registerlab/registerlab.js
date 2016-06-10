FILE=new ReactiveVar();
MATTERID=new ReactiveVar();
Template.registerlab.helpers({
	matters: function () {
		return MATTERS.find();
	},
	urlpdf() {
		return FILE.get();
	},
	myCallBacks: function() {
		return {
			finished: function(index, fileInfo, context) {
				console.log("OKS");
				FILE.set(fileInfo.url);
			}
		}
	}
});

Template.itemlab.events({
	"click #addlab": function(e) {
		e.preventDefault()
		MATTERID.set(this._id);
		$("#modal-id").modal();
	},
	"click #golab": function(e) {
		MATTERID.set(this._id);
		dinamicReactiveTemplate.set("listlabs");
	},
	"click #addstudents": function(e) {
		e.preventDefault();
		$("#modal-addstudents").modal();
	}

});
Template.itemlab.helpers({
	total() {
		return LABS.find({id_matter:this._id}).count();
	}
});
Template.registerlab.events({
	"click #save": function(e) {
		e.preventDefault();
		var s=$("#formLab").serializeObject();
	 	s.id_matter=MATTERID.get();
		console.log(FILE.get());
		if(FILE.get() != null) {
			Meteor.call('lab.register',s, function (error, result) {
			$("#modal-id").modal("hide");	
		});
		}
	}
});