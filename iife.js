SandwichMaker.writeVegg();
SandwichMaker.writeBreads();
SandwichMaker.writeCheese();
SandwichMaker.writeCond();
SandwichMaker.writeMeat();

const vegg = SandwichMaker.getVegg();
const breads = SandwichMaker.getBreads();
const cheese = SandwichMaker.getCheese();
const cond = SandwichMaker.getCond();
const meat = SandwichMaker.getMeat();

let checkbox = document.getElementsByClassName("checkbox");
for(let i = 0; i < checkbox.length; i++){
	// console.log("checkbox", checkbox[i]);
	checkbox[i].addEventListener("click", buildSandwich);
}

let mySandwich = [];

function buildSandwich(event){
	if(event.target.checked === true){
		mySandwich.push({topping: event.target.name, price: event.target.value});
	}
	else if(event.target.checked === false){
		for(let j = 0; j < mySandwich.length; j++){
			console.log("mysand j", mySandwich[j]);
			console.log("target name", event.target.name);
			if(mySandwich[j].topping === event.target.name){
				mySandwich.splice(j, 1);			
			}		
		}		
	}
	console.log("my sandwich and price", mySandwich);
}

let sandString = "";

mySandwich.forEach((topping) => {
	console.log("anything");
	sandString =+ `<p>${mySandwich.topping}</p>`;
});

let writeToDom = (strang) => {
	document.getElementById("selected-ingredients").innerHTML = strang;
}

writeToDom(sandString);



