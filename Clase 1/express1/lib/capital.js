module.exports = function(req,res,next){
	if(typeof req.params.name != "undefined"){
		console.log(req.params.name);
		var lower = req.params.name.toLowerCase();
		var name = lower[0].toUpperCase()+lower.slice(1,lower.length);
		req.params.name = name;	
	}
	console.log(req.params.name);
	next();
}