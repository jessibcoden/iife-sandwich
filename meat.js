var SandwichMaker = (function(maker){
	const meat = ["Turkey": 1.99, "Ham": 1.99, "Roast Beef": 2.25, "Bacon": 1.25, "Tuna": 1.99];

	maker.getMeat = function(){
		return meat
	}

	return maker;

})(SandwichMaker || {});
