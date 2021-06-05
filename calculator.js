
var numA1 = parseFloat(document.getElementById("numA1").value);
var denA1 = parseFloat(document.getElementById("denA1").value);

var numA2 = parseFloat(document.getElementById("numA2").value);
var denA2 = parseFloat(document.getElementById("denA2").value);

var numA3 = parseFloat(document.getElementById("numA3").value);
var denA3 = parseFloat(document.getElementById("denA3").value);

var numA4 = parseFloat(document.getElementById("numA4").value);
var denA4 = parseFloat(document.getElementById("denA4").value);

var weightA1 = parseFloat(document.getElementById("WeightA1").value);
var weightA2 = parseFloat(document.getElementById("WeightA2").value);
var weightA3 = parseFloat(document.getElementById("WeightA3").value);
var weightA4 = parseFloat(document.getElementById("WeightA4").value);

var grade1 = numA1/denA1;
var grade2 = numA2/denA2;
var grade3 = numA3/denA3;
var grade4 = numA4/denA4;

var weightedG1 = grade1*weightA1;
var WeightedG2 = grade2*weightA2;
var WeightedG3 = grade3*weightA3;
var WeightedG4 = grade4*weightA4;

var meanGrade = (grade1 + grade2 + grade3 + grade4) / 4;
var weightedGrade = (weightedG1 + WeightedG2 + WeightedG3 + WeightedG4) / (weightA1 + weightA2 + weightA3 + weightA4);

var meanButton = document.getElementById("Mean");
function meanClick() {
    document.getElementById("percent1").innerHTML = grade1;
    document.getElementById("percent2").innerHTML = grade2;
    document.getElementById("percent3").innerHTML = grade3;
    document.getElementById("percent4").innerHTML = grade4;
    document.getElementById("meanRes").innerHTML = meanGrade;
}
meanButton.onclick="meanClick()";

var weightedButton = document.getElementById('Weighted');
function weightClick() {
    document.getElementById("percent1").innerHTML = grade1;
    document.getElementById("percent2").innerHTML = grade2;
    document.getElementById("percent3").innerHTML = grade3;
    document.getElementById("percent4").innerHTML = grade4;
    document.getElementById("weightRes").innerHTML = weightedGrade;
}
weightedButton.onclic ="weightClick()";