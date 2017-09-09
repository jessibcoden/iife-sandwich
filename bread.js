const breadContainer = document.getElementById("bread-options");

var SandwichMaker = (function(maker){
	const breads = {"Marble Rye": 0.90, 
					"Sourdough": 0.90, 
					"Wheat": 0.70, 
					"Sub Roll": 0.70, 
					"Tortilla Wrap": 0.60
	};

	maker.getBreads = () => {
		return breads;
	}

	maker.writeBreads = function(){
		let domString = "";
		for(let i = 0; i < Object.keys(breads).length; i++){
			domString += `<input type="checkbox" class="checkbox" name="${Object.keys(breads)[i]}" value="${breads[Object.keys(breads)[i]]}">${Object.keys(breads)[i]}`;
		}

		writeToDom(domString);
	}

	function writeToDom (string){
	document.getElementById("bread-options").innerHTML = string;
}
	return maker;

})(SandwichMaker || {});
