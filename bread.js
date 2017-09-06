var SandwichMaker = (function(maker){
	const breads = ["Marble Rye": 0.90, "Sourdough": 0.90, "Wheat": 0.70, "Sub Roll": 0.70, "Tortilla Wrap": 0.60];

	maker.getBreads = function(){
		return breads
	}

	return maker;
})(SandwichMaker || {});
