// Write your JavaScript code here!

window.addEventListener("load", function () {
  document.getElementById("formSubmit").addEventListener("click", function (e) {
    //1 Use preventDefault() to prevent a request from being sent out and the page reloading
    e.preventDefault();
    let pilot = document.getElementById("pilotName");
    let copilot = document.querySelector('input[name="copilotName"]');
    let fuelLevel = document.querySelector('input[name="fuelLevel"]');
    let cargoLevel = document.querySelector('input[name="cargoMass"]');
    let list = document.querySelector("#faultyItems");
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });

  let listedPlanets;
  //   //    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      // console.log(listedPlanets);
      return listedPlanets;
    })
    .then(function (lp) {
      //console.log(lp);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let selectedPlanet = pickPlanet(lp);
      //console.log(selectedPlanet);
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
