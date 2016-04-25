var fs = require("fs");
var async = require("async");

function readFile(file,cb){
	fs.readFile(file,function(err,data){
		if(err){
			console.log("no puedo abrir el archivo");
			cb(err,null);
		}else{
			cb(null,data.toString());
		}	
	});
}

function saveInDb(content,cb){
	//db.files.insert({text:content},cb);
	cb();
}

/*
var buffer = fs.readFileSync("./texto.txt");
console.log(buffer.toString());
console.log("FIN DEL PROGRAMA");
*/
for(var i = 0; i < 10; i++){
	readFile("texto"+i+".txt",function(err,content){
		saveInDb(content,function(err,result){
			console.log(err,result);
		})
	});
	if(i == 9)
		console.log("termine de guardar en la base")
}

var list = [1,2,3,4];
async.eachSeries(items,function(item,next){
	readFile("texto"+i+".txt",function(err,content){
		saveInDb(content,function(err,result){
			console.log(err,result);
			next();
		});
	});
},function(){
	console.log("done");
})

