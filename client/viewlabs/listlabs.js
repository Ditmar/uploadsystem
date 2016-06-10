idLabs=new ReactiveVar();
Template.listlabs.helpers({
	list() {
		//console.log(MATTERID.get());
		return LABS.find({id_matter: MATTERID.get()});
	}
});
Template.labsitem.helpers({
  estudentlabs() {
    console.log(this);
    return ESTUDENTS_LABS.find({idLab:this._id});
  }
});
Template.labsitem.onCreated(function() {
  Meteor.subscribe('studentslabs',this.data._id);
});

Template.labsitem.events({
	"click #btnUpload" : function(e) {
		e.preventDefault();
		idLabs.set(this._id);
		$("#"+this._id).modal();
	},
  "click #delete" : function(e) {
    e.preventDefault();
    Meteor.call("lab.deleteLab", this._id, function() {

    });
  }
});
Template.modalupload.helpers({
  call: function(){
    return {
      finished: function(index, fileinfo, templateContext) {
        var obj = {};
        obj.idUs = Accounts.userId();
        obj.urlfiles = fileinfo.url;
        obj.idLab = idLabs.get();
        Meteor.call("lab.send", obj, function() {
        $("#"+idLabs.get()).modal("hide");
      });   
      }
    }
  }
})
