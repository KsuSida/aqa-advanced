// part 1

const shipsPromise = [];
shipsPromise.push(
        fetch(`https://swapi.dev/api/people/14`)
        .then(res => res.json())
        .then(j => j.starships)
    )
const spaceshipsArr = await Promise.all(shipsPromise);
const spaceshLinks = spaceshipsArr[0];
const namesPromise = [];
for (let i = 0; i < spaceshLinks.length; i++){
    namesPromise.push(
        fetch(`${spaceshLinks[i]}`)
        .then(res => res.json())
        .then(j => j.name)
    )
}
const spaceshipNames = await Promise.all(namesPromise);
console.log(spaceshipNames);

// part 2

const response = await fetch('https://swapi.dev/api/people/14');
const data = await response.json();
const shipLinks = data.starships;
for (let i = 0; i < shipLinks.length; i++){
       (async()=> {
        const res = await fetch(`${shipLinks[i]}`);
        const body = await res.json();
        console.log(body.name); 
       })()
}
