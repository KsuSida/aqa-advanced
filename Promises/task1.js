const planetsArrPromise = [];
for (let i = 1; i < 11; i++){
    planetsArrPromise.push(
        fetch(`https://swapi.dev/api/planets/${i}`)
        .then(res => res.json())
        .then(j => j.name)
    )
}
const planetNames = await Promise.all(planetsArrPromise);

console.log(planetNames);
