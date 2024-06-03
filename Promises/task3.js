import {Planet} from "./Planets.js";

const response = await fetch(`https://swapi.dev/api/films/3`);
const data = await response.json();
const planets = data.planets;
const plNames =[];
const residentLinks =[];
const residentNames =[];
const residentNames1 =[];

for (let i = 0; i < planets.length; i++){
    async function getPlNames(){
     const res = await fetch(`${planets[i]}`);
     const body = await res.json();
     return body; 
    }
    const body = await getPlNames();
    await plNames.push(body.name);
    await residentLinks.push(body.residents)
}

for (let i = 0; i < residentLinks.length; i++){
    for (let a = 0; a < residentLinks[i].length; a++){
    async function getResNames(){
     const res = await fetch(`${residentLinks[i][a]}`);
     const body = await res.json();
     return body; 
    }
    //console.log(`${residentLinks[i][a]}`);
    const namesRes = await getResNames();
    const nameR = namesRes.name;
    await residentNames[a].push(nameR);
    }

await residentNames1[i].push(residentNames);
}
// console.log(residentNames);
console.log(residentNames);
