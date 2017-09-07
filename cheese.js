var SandwichMaker = (function(maker){
	const cheese = {"Cheddar": 0.99, 
					"Swiss": 0.99, 
					"Brie": 1.25, 
					"Smoked Gouda": 1.25, 
					"Provolone": 0.99
				};

	maker.getCheese = function(){
		let domString = "";
		for(let i = 0; i < Object.keys(cheese).length; i++){
		console.log("looping")
			domString += `<label>`;
			domString +=	`<input type="checkbox">${Object.keys(cheese)[i]}`;
			domString += `</label>`;
		}
		writeToDom(domString);
	}

	function writeToDom (string){
	document.getElementById("cheese-options").innerHTML = string;
}
	return maker;

})(SandwichMaker || {});
