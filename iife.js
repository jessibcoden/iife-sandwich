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
let mySandwich = [];
let myPrice = [];

for(let i = 0; i < checkbox.length; i++){
	// console.log("checkbox", checkbox[i]);
	checkbox[i].addEventListener("click", buildSandwich);
}

function buildSandwich(event){
	console.log("event", event);
	if(event.target.checked === true){
		mySandwich.push(event.target.name);
		myPrice.push(event.target.value);
	}
	else if(event.target.unchecked === true){
		const index = array.indexOf(event.target);
		array.splice(index, 1);
	}
	console.log("my sandwich and price", mySandwich, myPrice);
}





