// Write your JavaScript code here!

window.addEventListener("load", function () {
  let form = document.getElementById("formSubmit");
  form.addEventListener("click", function (e) {
    e.preventDefault();
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    let faultyItemsList = document.getElementById("faultyItems");

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });

  let listedPlanets;

  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      return listedPlanets;
    })
    .then(function (lp) {
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let selectedPlanet = pickPlanet(lp);
      let name = selectedPlanet.name;
      let diameter = selectedPlanet.diameter;
      let star = selectedPlanet.star;
      let distance = selectedPlanet.distance;
      let imageUrl = selectedPlanet.image;
      let moons = selectedPlanet.moons;
      addDestinationInfo(
        document,
        name,
        diameter,
        star,
        distance,
        moons,
        imageUrl
      );
    });
});
