const solarSystem = document.getElementById("solarSystem");
const planets = [
  {
    name: "Mercury",
    diameter: 4879,
    color: "grey",
  },
  {
    name: "Venus",
    diameter: 12104,
    color: "yellow",
  },
  {
    name: "Earth",
    diameter: 12742,
    color: "green",
  },
  {
    name: "Mars",
    diameter: 6779,
    color: "pink",
  },
  {
    name: "Jupiter",
    diameter: 139822,
    color: "yellow",
  },
  {
    name: "Saturn",
    diameter: 116464,
    color: "orange",
  },
  {
    name: "Uranus",
    diameter: 50724,
    color: "grey",
  },
  {
    name: "Neptune",
    diameter: 49244,
    color: "blue",
  },
];

// Task:
// Write a function to render
// the planets from the planets array using JavaScript.
// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)

function circle(diameter) {
  return (diameter / 15000).toFixed(2);
}

function renderSolarSystem() {
  planets.forEach(function (planet) {
    let planetHtml = document.createElement("section");
    planetHtml.setAttribute(
      "style",
      `width: ${circle(planet.diameter)}em; height: ${circle(
        planet.diameter
      )}em; background: linear-gradient(90deg, ${
        planet.color
      }, black); border-radius:50%;`
    );
    planetHtml.classList.add("planet");

    let planetFacts = document.createElement("div");
    planetFacts.classList.add("planet-facts");
    planetFacts.setAttribute(
      "style",
      `display: none; background: ${planet.color}; top: 20; left: 10; position: absolute; padding: 10px; border-radius: 10px; font-size: 1.2em;`
    );

    let planetName = document.createElement("h1");
    planetName.textContent = planet.name;
    planetName.classList.add("planet-name");
    let planetDiameter = document.createElement("h2");
    planetDiameter.textContent = `Diameter: ${planet.diameter}km`;
    planetDiameter.classList.add("planet-diameter");

    planetHtml.addEventListener("mouseenter", function (e) {
      planetFacts.style.display = "block";
    });
    planetHtml.addEventListener("mouseleave", function (e) {
      planetFacts.style.display = "none";
    });
    planetFacts.appendChild(planetName);
    planetFacts.appendChild(planetDiameter);
    document.body.appendChild(planetFacts);
    solarSystem.appendChild(planetHtml);
  });
}

renderSolarSystem();
