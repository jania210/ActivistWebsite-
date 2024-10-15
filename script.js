//Random Facts List for Facts Generator 
var factList = [
  "Tourism contributes significantly to greenhouse gas emissions, with transportation accounting for a significant portion of these emissions. Air travel, in particular, releases large amounts of carbon dioxide, contributing to climate change and environmental degradation.",/*0*/
  "Popular tourist activities such as snorkeling and diving can cause physical damage to coral reefs, fragile marine ecosystems that are vital for biodiversity. Improper practices and contact with tourists can lead to coral bleaching and the disruption of underwater habitats.",/*1*/
  "Tourism often strains local water resources, leading to increased water consumption and pollution of water bodies due to inadequate waste management. In some regions, the demand for water by hotels, resorts, and tourists can exacerbate existing water scarcity issues.",/*2*/
  "Mass tourism can contribute to the erosion of local cultures and traditions. Commercialization of cultural sites, practices, and traditions for the sake of tourism can lead to inauthentic experiences and loss of identity for local communities."];/*3*/


// Establishing the variable to count each fact and recognize the fact/button when used later in code
var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

//Button that connects the click of the button to displaying the facts
myButton.addEventListener("click", displayFact);

//Fuction that controls that process of each fact being recycled after each click
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}