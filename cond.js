var SandwichMaker = (function(maker){
	const cond = {"Mayo": 0.25, 
				  "Mustard": 0.25, 
				  "Honey Mustard": 0.25, 
				  "Cream Cheese": 0.75, 
				  "Oil & Vinegar": 0.50
				};

	maker.getCond = function(){
		let domString = "";
		for(let i = 0; i < Object.keys(cond).length; i++){
		console.log("looping")
			domString += `<label>`;
			domString +=	`<input type="checkbox">${Object.keys(cond)[i]}`;
			domString += `</label>`;
		}
		writeToDom(domString);
	}

	function writeToDom (string){
	document.getElementById("cond-options").innerHTML = string;
}
	return maker;

})(SandwichMaker || {});
