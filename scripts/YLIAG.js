var sadness = 0;
var misery = 0;
var emptiness = 0;
var v0id = 0;
var money = 0;
var miseryCostMultiplier = 1;
var emptinessCostMultiplier = 1;
var reset = 1;

function work() {
	sadness += (10+(misery*1)+(emptiness*2))*reset;
	document.getElementById("sadness").innerHTML = sadness;
	document.getElementById("log").innerHTML = "Work sucks, so sadness will increase!";
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
	}
}