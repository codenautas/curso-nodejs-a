module.exports = function(req,res,next){
	if(typeof req.params.name != "undefined"){
		req.params.name = "Hello "+req.params.name;
	}
	next();
}