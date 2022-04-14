class Pokemon{
    constructor(pokename){
        this.pokename = pokename;
    } 

    sayHello() {
        console.log(`Hello ${this.pokename}`)
    }

    sayMessage(message){
        console.log(message)
    }
    
   
}

module.exports = Pokemon
