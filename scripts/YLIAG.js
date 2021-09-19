var sadness = 0;
var misery = 0;
var emptiness = 0;
var v0id = 0;
var money = 0;
var plant = 0;
var joy = 0;
var peace = 0;
var miseryCostMultiplier = 1;
var emptinessCostMultiplier = 1;
var plantCostMultiplier = 1;
var joyCostMultiplier = 1;
var reset = 1;

function work() {
	sadness += (10+(misery*1)+(emptiness*2))*reset;
	document.getElementById("sadness").innerHTML = sadness;
	document.getElementById("log").innerHTML = "Work sucks, so sadness will increase!";
	if (reset>2){
		money += 5*reset;
		document.getElementById("money").innerHTML = money;
	}
}

function buyMisery() {
	if (sadness >=10*(miseryCostMultiplier)) {
		sadness -= 10*(miseryCostMultiplier);
		document.getElementById("sadness").innerHTML = sadness;
		misery++;
		miseryCostMultiplier = 1 + (misery*.1) ;
		document.getElementById("misery").innerHTML = misery;
		document.getElementById("log").innerHTML = "Sadness becomes misery, which increases the rate of sadness gain.";
	}
}

function buyEmptiness() {
	if (misery >=10*(emptinessCostMultiplier)) {
		misery -= 10*(emptinessCostMultiplier);
		miseryCostMultiplier = 1 + (misery*.1) ;
		document.getElementById("misery").innerHTML = misery;
		emptiness++;
		emptinessCostMultiplier = 1 + (emptiness*.1) ;
		document.getElementById("emptiness").innerHTML = emptiness;
		document.getElementById("log").innerHTML = "You feel empty inside. Surely it can't get worse?";
	}
}

function buyVoid() {
	if (emptiness >=10 && reset ==1) {
		sadness = 0;
		misery =0;
		emptiness = 0;
		document.getElementById("sadness").innerHTML = sadness;
		document.getElementById("misery").innerHTML = misery;
		document.getElementById("emptiness").innerHTML = emptiness;
		document.getElementById("log").innerHTML = "Boundary condition exceeded. Sadness reset.";
		reset++;
		miseryCostMultiplier = 1;
		emptinessCostMultiplier = 1;
	}
	else if (emptiness >=10 && reset == 2) {
		sadness = 0;
		misery =0;
		emptiness = 0;
		document.getElementById("sadness").innerHTML = sadness;
		document.getElementById("misery").innerHTML = misery;
		document.getElementById("emptiness").innerHTML = emptiness;
		document.getElementById("log").innerHTML = "This is weird. I'm not sad anymore? What could this mean? Sadness reset.";
		reset++;
		document.getElementById("secretStats").style.display = "block";
		document.getElementById("secretPurchases").style.display = "block";
		miseryCostMultiplier = 1;
		emptinessCostMultiplier = 1;
	}
	v0id++;
	document.getElementById("void").innerHTML = v0id;
	
}

function buyPlant() {
	if (money >= (10*plantCostMultiplier)){
		money -= 10*(plantCostMultiplier);
		plantCostMultiplier = 1 + (plant*.1) ;
		plant++;
		document.getElementById("money").innerHTML = money;
		document.getElementById("plant").innerHTML = plant;
		document.getElementById("log").innerHTML = "A plant seems like a good investment. It'll freshen things up some.";
	}
}

function buyJoy() {
	if (plant >=10*(joyCostMultiplier)) {
		plant -= 10*(joyCostMultiplier);
		joyCostMultiplier = 1 + (joy*.1) ;
		document.getElementById("plant").innerHTML = plant;
		joy++;
		joyCostMultiplier = 1 + (joy*.1) ;
		document.getElementById("joy").innerHTML = joy;
		document.getElementById("log").innerHTML = "All these plants are taking your mind off of the stressors of your life. Was this the answer all along?";
	}
}

function buyPeace() {
	if (joy >=10) {
		joy -= 10;
		joyCostMultiplier = 1;
		document.getElementById("joy").innerHTML = joy;
		peace++;
		sadness = 0;
		misery =0;
		emptiness = 0;
		document.getElementById("sadness").innerHTML = sadness;
		document.getElementById("misery").innerHTML = misery;
		document.getElementById("emptiness").innerHTML = emptiness;
		document.getElementById("peace").innerHTML = peace;
		document.getElementById("log").innerHTML = "You have so many plants now, that it seems you no longer have time to be sad! You beat the game!";
	}
}