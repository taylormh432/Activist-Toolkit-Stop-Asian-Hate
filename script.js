/* .js files add interaction to your website */

var factList = [
  "AAPI women and men report hate crime experiences at similar rates over the past two years (2020-2021).",
  "Asian Australians suffered a disproportionate drop in working hours last spring, which “was more than twice the drop” for the rest of the population, according to researchers at the Australian National University.",
  "According to a report by Stop AAPI Hate, women reported 64.8% of the total hate incidents.",
  "Verbal harassment and shunning are the most common types of AAPI discrimination.",
];

var fact = document.getElementById("fact");

var button = document.getElementById("factButton");

var count = 0;

if (button) {
button.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}