
// reactive var management the main template

dinamicReactiveTemplate = new ReactiveVar("registerlab");

Router.configure({
	layoutTemplate : "layout"
});
Router.route("/",function() {

	// Check the user has the role form make a subscrition 

	if (Roles.userIsInRole(Accounts.userId(), "admin")) {
		Meteor.subscribe("totalLabs");
	} else {
		Meteor.subscribe("totalLabs");
	}
	Meteor.subscribe('getUsers');
	Meteor.subscribe('matters');
	this.render("mainlabs");
});