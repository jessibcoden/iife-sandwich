var SandwichMaker = (function(maker){
	const meat = {"Turkey": 1.99, 
				  "Ham": 1.99, 
				  "Roast Beef": 2.25, 
				  "Bacon": 1.25, 
				  "Tuna": 1.99
				};

	maker.getMeat = function(){
		let domString = "";
		for(let i = 0; i < Object.keys(meat).length; i++){
		console.log("looping")
			domString += `<label>`;
			domString +=	`<input type="checkbox">${Object.keys(meat)[i]}`;
			domString += `</label>`;
		}
		writeToDom(domString);
	}

	function writeToDom (string){
	document.getElementById("meat-options").innerHTML = string;
}
	return maker;

})(SandwichMaker || {});
