$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};
$.fn.clear=function(){
	var a=this.serializeArray();
	$.each(a,function() {
		//console.log(document.getElementsByName(this.name));
		var el=document.getElementsByName(this.name)
		for(var i=0;i<el.length;i++)
		{
			el[i].value="";
		}	
	});
}