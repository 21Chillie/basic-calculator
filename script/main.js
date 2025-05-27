let calculation = "";

document.querySelector(".btn-1").addEventListener("click", () => {
  calculation += "1";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-2").addEventListener("click", () => {
  calculation += "2";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-3").addEventListener("click", () => {
  calculation += "3";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-4").addEventListener("click", () => {
  calculation += "4";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-5").addEventListener("click", () => {
  calculation += "5";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-6").addEventListener("click", () => {
  calculation += "6";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-7").addEventListener("click", () => {
  calculation += "7";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-8").addEventListener("click", () => {
  calculation += "8";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-9").addEventListener("click", () => {
  calculation += "9";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-0").addEventListener("click", () => {
  calculation += "0";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-dot").addEventListener("click", () => {
  calculation += ".";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-add").addEventListener("click", () => {
  calculation += " + ";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-subtraction").addEventListener("click", () => {
  calculation += " - ";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-multiplication").addEventListener("click", () => {
  calculation += " * ";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-division").addEventListener("click", () => {
  calculation += " / ";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = calculation;
});

document.querySelector(".btn-eval").addEventListener("click", () => {
  calculation = eval(calculation);
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = `= ${calculation}`;
});

document.querySelector(".btn-clear").addEventListener("click", () => {
  calculation = "";
  console.log(calculation);
  document.querySelector(".math-operator").innerHTML = `${calculation}`;
});
