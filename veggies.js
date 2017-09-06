var SandwichMaker = (function(maker){
	const vegg = ["Lettuce": 0.25, "Tomato": 0.25, "Onion": 0.25, "Pickles": 0.25, "Spinach": 0.50];

	maker.getVegg = function(){
		return vegg;
	}

	return maker;

})(SandwichMaker || {});
