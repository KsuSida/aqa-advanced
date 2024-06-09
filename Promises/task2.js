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

const responseHalo = await fetch('https://swapi.dev/api/people/14');
const dataHalo = await responseHalo.json();
const starshipsURL = dataHalo.starships;
for (const starshipURL of starshipsURL){
    const starshipResponse = await fetch(starshipURL);
    const starshipData = await starshipResponse.json();
    const starshipName = starshipData.name;
    console.log(starshipName);
}
