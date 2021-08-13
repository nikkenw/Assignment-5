// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(string) {
  //pilotName
  //copilotName
  //fuelLevel
  //cargoMass
  if (string === "") {
    return "Empty";
  } else if (isNaN(string)) {
    return "Not a Number";
  } else if (!isNaN(string)) {
    return "Is a Number";
  }
}

console.log(validateInput("5"));

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const list = document.getElementById("faultyItems");
  const pilot = document.getElementById("pilotStatus");
  const copilot = document.getElementById("copilotStatus");
  const fuelLevel = document.getElementById("fuelStatus");
  const cargoLevel = document.getElementById("cargoStatus");
  const statusHeading = document.getElementById("launchStatus");

  pilotStatus.innerHTML = `
    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} Ready</li>
    `;

  copilotStatus.innerHTML = `
    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} Ready</li>
    `;

  if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    statusHeading.innerHTML = `Shuttle not ready for launch`;
    statusHeading.style.color = "red";
    fuelLevel.innerHTML = ` <li id="fuelStatus" data-testid="fuelStatus">Not enough fuel for the journey</li>`;
  }

  if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    statusHeading.innerHTML = `Shuttle not ready for launch`;
    statusHeading.style.color = "red";
    cargoLevel.innerHTML = ` <li id="cargoStatus" data-testid="cargoStatus">Too much mass for the shuttle to take off</li>`;
  }

  if (fuelLevel > 10000 && cargoLevel < 10000) {
    statusHeading.style.color = "green";
    statusHeading.innerHTML = `Shuttle is ready for launch`;
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {});

  return response.json();
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
