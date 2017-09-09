var SandwichMaker = (function(maker){
	const meat = {"Turkey": 1.99, 
				  "Ham": 1.99, 
				  "Roast Beef": 2.25, 
				  "Bacon": 1.25, 
				  "Tuna": 1.99
	};
	
	maker.getMeat = () => {
		return meat;
	};
	
	maker.writeMeat = function(){
		let domString = "";
		for(let i = 0; i < Object.keys(meat).length; i++){
			domString += `<input type="checkbox" class="checkbox" name="${Object.keys(meat)[i]}" value="${meat[Object.keys(meat)[i]]}">${Object.keys(meat)[i]}`;
		}

		writeToDom(domString);
	}

	function writeToDom (string){
	document.getElementById("meat-options").innerHTML = string;
}
	return maker;

})(SandwichMaker || {});
