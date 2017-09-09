var SandwichMaker = (function(maker){
	const cond = {"Mayo": 0.25, 
				  "Mustard": 0.25, 
				  "Honey Mustard": 0.25, 
				  "Cream Cheese": 0.75, 
				  "Oil & Vinegar": 0.50
	};

	maker.getCond = () => {
		return cond;
	};

	maker.writeCond = function(){
		let domString = "";
		for(let i = 0; i < Object.keys(cond).length; i++){
			domString += `<input type="checkbox" class="checkbox" name="${Object.keys(cond)[i]}" value="${cond[Object.keys(cond)[i]]}">${Object.keys(cond)[i]}`;
		}

		writeToDom(domString);
	}

	function writeToDom (string){
	document.getElementById("cond-options").innerHTML = string;
}
	return maker;

})(SandwichMaker || {});
