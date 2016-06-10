// Accounts extra fields
Accounts.ui.config({
	requestPermissions: {
		// facebook: ['user_likes']
	},
	requestOfflineToken: {
		// google: true
	},
	passwordSignupFields: 'EMAIL_ONLY' //  One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
	,
	extraSignupFields: [{
		fieldName: 'first-name',
        fieldLabel: 'Nombres',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
        	if (!value) {
        		errorFunction("Porfavor Escriba su nombre")
        		return false;
        	} else {
        		return true;
        	}
        }
	}, {
		fieldName: 'Last-name',
		fieldLabel: 'Apellidos',
		inputType: 'text',
		visible: true,
		validate: function(value, errorfunction) {
			if (!value) {
				errorfunction("Porfavor escriba sus apellidos")
				return false;
			} else {
				return true;
			}	
		}

	}, {
		fieldName: 'ci',
		fieldLabel: 'Carnet de Identidad',
		inputType: 'text',
		visible: true
	}]
});
// Control the actions menu 
Template.actionsmenu.events({
	'click #create_lab': function (e) {
		e.preventDefault();
		dinamicReactiveTemplate.set("registerlab");
	},
	'click #create_matter': function (e) {
		e.preventDefault();
		dinamicReactiveTemplate.set("registermatters");	
	}
});
Template.mainmenu.events({
	'click #gotolab': function (e) {
		e.preventDefault();
		console.log("MP");
		Router.go("/");
	}
});