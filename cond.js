var SandwichMaker = (function(maker){
	const cond = ["Mayo": 0.25, "Mustard": 0.25, "Honey Mustard": 0.25, "Cream Cheese": 0.75, "Oil & Vinegar": 0.50];

	maker.getCond = function(){
		return cond
	}

	return maker;

})(SandwichMaker || {});
