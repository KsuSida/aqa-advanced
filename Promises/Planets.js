export class Planet{
    constructor( planetName, residents){
        this._planetName = planetName,
        this._residents = residents
    }
    get planetName(){
        return this._planetName;
    }
    get residents(){
        return this._residents;
    }
    
    get printInfo(){
        console.log(`${this.planetName}, ${this.residents}`)
    }
};
