const breadContainer = document.getElementById("bread-options");

var SandwichMaker = (function(maker){
	const breads = {"Marble Rye": 0.90, 
					"Sourdough": 0.90, 
					"Wheat": 0.70, 
					"Sub Roll": 0.70, 
					"Tortilla Wrap": 0.60
				};

	maker.getBreads = function(){
		let domString = "";
		for(let i = 0; i < Object.keys(breads).length; i++){
		console.log("looping")
			domString += `<label>`;
			domString +=	`<input type="checkbox">${Object.keys(breads)[i]}`;
			domString += `</label>`;
		}
		writeToDom(domString);
	}

	function writeToDom (string){
	document.getElementById("bread-options").innerHTML = string;
}
	return maker;

})(SandwichMaker || {});
