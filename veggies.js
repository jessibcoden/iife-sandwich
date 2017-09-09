var SandwichMaker = (function(maker){
	const vegg = {	"Lettuce": 0.25,
					"Tomato": 0.25,
					"Onion": 0.25, 
					"Pickles": 0.25, 
					"Spinach": 0.50
	};

	maker.getVegg = () => {
		return vegg;
	};

	maker.writeVegg = function(){
		let domString = "";
		for(let i = 0; i < Object.keys(vegg).length; i++){
			domString += `<input type="checkbox" class="checkbox" name="${Object.keys(vegg)[i]}" value="${vegg[Object.keys(vegg)[i]]}">${Object.keys(vegg)[i]}`;
		}

		writeToDom(domString);
	}

	function writeToDom (string){
	document.getElementById("vegg-options").innerHTML = string;
}
	return maker;

})(SandwichMaker || {});
