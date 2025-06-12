let calculation = localStorage.getItem("calculation");

if (calculation === null) {
	calculation = "";
}

document.querySelector(".math-operator").textContent = calculation;

function inputCalculation(userInput) {
	calculation += userInput;
	document.querySelector(".math-operator").textContent = calculation;
	console.log(calculation);
}

function doCalculation() {
	let calculationInput = calculation;
	calculationInput = eval(calculationInput);
	calculation = calculationInput.toString();
	document.querySelector(".math-operator").textContent = `= ${calculation}`;
	console.log(calculationInput);

	localStorage.setItem("calculation", calculation);
}

document.querySelector(".btn-1").addEventListener("click", () => {
	inputCalculation("1");
});

document.querySelector(".btn-2").addEventListener("click", () => {
	inputCalculation("2");
});

document.querySelector(".btn-3").addEventListener("click", () => {
	inputCalculation("3");
});

document.querySelector(".btn-4").addEventListener("click", () => {
	inputCalculation("4");
});

document.querySelector(".btn-5").addEventListener("click", () => {
	inputCalculation("5");
});

document.querySelector(".btn-6").addEventListener("click", () => {
	inputCalculation("6");
});

document.querySelector(".btn-7").addEventListener("click", () => {
	inputCalculation("7");
});

document.querySelector(".btn-8").addEventListener("click", () => {
	inputCalculation("8");
});

document.querySelector(".btn-9").addEventListener("click", () => {
	inputCalculation("9");
});

document.querySelector(".btn-0").addEventListener("click", () => {
	inputCalculation("0");
});

document.querySelector(".btn-dot").addEventListener("click", () => {
	inputCalculation(".");
});

document.querySelector(".btn-add").addEventListener("click", () => {
	inputCalculation(" + ");
});

document.querySelector(".btn-subtraction").addEventListener("click", () => {
	inputCalculation(" - ");
});
document.querySelector(".btn-multiplication").addEventListener("click", () => {
	inputCalculation(" * ");
});

document.querySelector(".btn-division").addEventListener("click", () => {
	inputCalculation(" / ");
});
document.querySelector(".btn-eval").addEventListener("click", () => {
	doCalculation();
});

document.querySelector(".btn-clear").addEventListener("click", () => {
	calculation = "";
	document.querySelector(".math-operator").textContent = `${calculation}`;
	localStorage.removeItem("calculation");
});
