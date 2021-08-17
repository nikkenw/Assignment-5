// Write your helper functions here!
//require("isomorphic-fetch");

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
  // Here is the HTML formatting for our mission target div.
  /*
               
   */
}

function validateInput(string) {
  if (string === "") {
    alert("All fields required.");
    return "Empty";
  } else if (isNaN(parseInt(string))) {
    return "Not a Number";
  } else if (!isNaN(parseInt(string))) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (validateInput(pilot.value) !== "Not a Number") {
    if (validateInput(pilot.value) === "Is a Number") {
      alert("Pilot name should be a string");
      return;
    }
    if (validateInput(pilot.value) === "Empty") {
      return;
    }
  }

  if (validateInput(copilot.value) !== "Not a Number") {
    if (validateInput(copilot.value) === "Is a Number") {
      alert("copilot name should be a string");
      return;
    }
    if (validateInput(copilot.value) === "Empty") {
      return;
    }
  }

  if (validateInput(fuelLevel.value) !== "Is a Number") {
    if (validateInput(fuelLevel.value) === "Not a Number") {
      alert("Fuel level should be a number");
      return;
    }
    if (validateInput(fuelLevel.value) === "Empty") {
      return;
    }
  }

  if (validateInput(cargoLevel.value) !== "Is a Number") {
    if (validateInput(cargoLevel.value) === "Not a Number") {
      alert("Cargo level should be a number");
      return;
    }
    if (validateInput(cargoLevel.value) === "Empty") {
      return;
    }
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
  if (fuelLevel.value > 10000 && cargoLevel.value < 10000) {
    list.style.visibility = "visible";
    statusHeading.style.color = "green";
    statusHeading.innerHTML = `Shuttle is ready for launch`;
  }
  //console.log(pilot.value);

  let htmlList = `<ol>
<li id="pilotStatus" data-testid="pilotStatus">${pilot.value} Ready</li>
<li id="copilotStatus" data-testid="copilotStatus">${copilot.value} Ready</li>
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
  //console.log(planets[index]);
  return planets[index];
}

//module.exports.addDestinationInfo = addDestinationInfo;
//module.exports.validateInput = validateInput;
//module.exports.formSubmission = formSubmission;
//module.exports.pickPlanet = pickPlanet;
//module.exports.myFetch = myFetch;
