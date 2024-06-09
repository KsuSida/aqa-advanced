const results = [];

const filmResponse = await fetch(`https://swapi.dev/api/films/3`);
const filmData = await filmResponse.json();
const planetsURL = filmData.planets;

for (const planetURL of planetsURL){
    const planetResponse = await fetch(planetURL);
    const planetData = await planetResponse.json();
    const planetInfo = {
        planetName: planetData.name,
        residents: [],
    }
   const residentsURLs = planetData.residents;
   for (const residentURL of residentsURLs){
        const residentResponse = await fetch(residentURL);
        const residentData = await residentResponse.json();
        planetInfo.residents.push(residentData.name)
    }
    results.push(planetInfo);
}
console.log(results);
