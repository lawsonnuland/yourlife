var sadness = 0;
var misery = 0;
var emptiness = 0;
var v0id = 0;
var money = 0;
var miseryCostMultiplier = 1;
var emptinessCostMultiplier = 1;

function work() {
	sadness += 1+(misery*.1)+(emptiness*.2);
	document.getElementById("sadness").innerHTML = sadness;
}

function buymisery() {
	if (sadness>=10*(miseryCostMultiplier)) {
		sadness -= 10*(miseryCostMultiplier);
		document.getElementById("sadness").innerHTML = sadness;
		misery++;
		miseryCostMultiplier += .1;
		document.getElementById("misery").innerHTML = misery;
	}
}

function buyemptiness() {
	if (misery>=10*(emptinessCostMultiplier)) {
		misery -= 10*(emptinessCostMultiplier);
		document.getElementById("misery").innerHTML = sadness;
		emptiness++;
		emptinessCostMultiplier += .1;
		document.getElementById("emptiness").innerHTML = misery;
	}
}