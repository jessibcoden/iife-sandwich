var SandwichMaker = (function(maker){
	const cheese = ["Cheddar": 0.99, "Swiss": 0.99, "Brie": 1.25, "Smoked Gouda": 1.25, "Provolone": 0.99];

	maker.getCheese = function(){
		return cheese
	}

	return maker;
})(SandwichMaker || {});
