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
  document.getElementById(
    "missionTarget"
  ).innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter:${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance} </li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`;
}

function validateInput(string) {
  if (string === "") {
    return "Empty";
  } else if (isNaN(parseInt(string))) {
    return "Not a Number";
  } else if (!isNaN(parseInt(string))) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (
    validateInput(pilot.value) === "Empty" ||
    validateInput(copilot.value) === "Empty" ||
    validateInput(fuelLevel.value) === "Empty" ||
    validateInput(cargoLevel.value) === "Empty"
  ) {
    window.alert("All fields required");
    return;
  } else if (
    validateInput(pilot.value) === "Is a Number" ||
    validateInput(copilot.value) === "Is a Number" ||
    validateInput(fuelLevel.value) === "Not a Number" ||
    validateInput(cargoLevel.value) === "Not a Number"
  ) {
    window.alert(
      "Incorrect input type: Pilot and Copilot should be strings, fuel level and cargo mass should be numbers."
    );
    return;
  }

  let fuelStatus = "Fuel level high enough for launch";
  let cargoStatus = "Cargo mass low enough for launch";

  let statusHeading = document.getElementById("launchStatus");

  if (fuelLevel.value < 10000) {
    list.style.visibility = "visible";
    statusHeading.innerHTML = `Shuttle not ready for launch`;
    statusHeading.style.color = "red";
    fuelStatus = "Not enough fuel for the journey";
  }
  if (cargoLevel.value > 10000) {
    list.style.visibility = "visible";
    statusHeading.innerHTML = `Shuttle not ready for launch`;
    statusHeading.style.color = "red";
    cargoStatus = "Too much mass for the shuttle to take off";
  }
  if (fuelLevel.value >= 10000 && cargoLevel.value <= 10000) {
    list.style.visibility = "hidden";
    statusHeading.style.color = "green";
    statusHeading.innerHTML = `Shuttle is ready for launch`;
  }

  let htmlList = `<ol>
<li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} is ready for launch.</li>
<li id="copilotStatus" data-testid="copilotStatus">Copilot ${copilot.value} is ready for launch.</li>
<li id="fuelStatus" data-testid="fuelStatus">${fuelStatus}</li>
<li id="cargoStatus" data-testid="cargoStatus">${cargoStatus}</li>
</ol>`;
  list.innerHTML = htmlList;
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let index = Math.floor(Math.random() * 5);
  return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
