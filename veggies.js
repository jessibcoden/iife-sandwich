var SandwichMaker = (function(maker){
	const vegg = {	"Lettuce": 0.25,
					"Tomato": 0.25,
					"Onion": 0.25, 
					"Pickles": 0.25, 
					"Spinach": 0.50
				};

	maker.getVegg = function(){
		let domString = "";
		for(let i = 0; i < Object.keys(vegg).length; i++){
		console.log("looping")
			domString += `<label>`;
			domString +=	`<input type="checkbox">${Object.keys(vegg)[i]}`;
			domString += `</label>`;
		}
		writeToDom(domString);
	}

	function writeToDom (string){
	document.getElementById("bread-options").innerHTML = string;
}
	return maker;

})(SandwichMaker || {});
