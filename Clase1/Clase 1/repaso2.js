var items = [];

function createItem(){
	var item = {
		images:[],
		title:"Minitorno Dremel 4000 36 Accesorios Eje Flexible C/ Maletin ",
		like:false,
		total_price:3235,
		installment:{},
		isNew:false,
		vendidos:27,
		location:{
			city:"Buenos Aires",
			city_id:123,
			lat:"-54...."
		},
		isOfficial:false,
		flete:false
}
	function buildInstallments(item){
		item.installment["6"] = 123;
		item.installment["12"] = 200;
	}
	buildInstallments(item);

	return item;
}

for(var i = 0; i < 10;i++){
	var newItem = createItem();
	items.push(newItem);
}

items.forEach(function(item){
	console.log(item);
});


