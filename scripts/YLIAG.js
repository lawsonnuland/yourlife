var sadness = 0;
var misery = 0;
var emptiness = 0;
var v0id = 0;
var miscostmult =1;

function work() {
	sadness++;
	document.getElementById("sadness").innerHTML = sadness;
}

function buymisery() {
	if (sadness>=10*(miscostmult)) {
		sadness -= 10*(miscostmult);
		document.getElementById("sadness").innerHTML = sadness;
		misery++;
		miscostmult += .2;
		document.getElementById("misery").innerHTML = misery;
	}
}