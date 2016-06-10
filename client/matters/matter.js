Template.registermatters.events({
	"click button": function(events) {
		events.preventDefault();
		var form = $("#registerForm").serializeObject();
		Meteor.call('matter.register',form, function (error, result) {

		});
	}
});

Template.listmatters.helpers({
	matters: function () {
		return MATTERS.find();
	}
});