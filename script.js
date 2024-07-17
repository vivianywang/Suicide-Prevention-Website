var factList = [
  "An estimated 703 000 people die by suicide worldwide each year",
  "Over one in every 100 deaths (1.3%) in 2019 was the result of suicide.",
  "The global suicide rate is over twice as high among men than women.",
  "Over half (58%) of all deaths by suicide occur before the age of 50 years old",
  "Globally, suicide is the fourth leading cause of death in 15-29-year-olds.",
  "Seventy-seven per cent of global suicides occur in low- and middle-income countries.",
  "Twenty percent of teens have seriously considered suicide.",
  "In 2022 there was an estimated 1.6 million suicide attempts.",
  "Of the G7 countries, the USA had the highest and Italy the lowest suicide rate."
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("generate");
var count = 0

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0
  }
}
