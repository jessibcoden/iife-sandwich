var SandwichMaker = (function(maker){
	const cheese = {"Cheddar": 0.99, 
					"Swiss": 0.99, 
					"Brie": 1.25, 
					"Smoked Gouda": 1.25, 
					"Provolone": 0.99
	};

	maker.getCheese = () => {
		return cheese;
	};

	maker.writeCheese = function(){
		let domString = "";
		for(let i = 0; i < Object.keys(cheese).length; i++){
			domString += `<input type="checkbox" class="checkbox" name="${Object.keys(cheese)[i]}" value="${cheese[Object.keys(cheese)[i]]}">${Object.keys(cheese)[i]}`;
		}

		writeToDom(domString);
	}

	function writeToDom (string){
	document.getElementById("cheese-options").innerHTML = string;
}
	return maker;

})(SandwichMaker || {});
