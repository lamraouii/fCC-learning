/*
const name ='messi'
export default name
export const club = 'culturel'
*/

export  class User {
   #nb =10 // hda houa private

   static counter =1
    // constructor hka jaytktb
    constructor(name,alias,trophy=0){
    this.name=name;
    this.alias=alias
    this.trophy=trophy
    this.#nb= User.counter++
    }

    displaystats(){
        return `${this.name} has ${this.trophy} trophies`
    }

    addTrohpy = (T) => this.trophy += T 

    getnb = () => this.#nb
}

export class Goat extends User {
    isgoat = true // hdi machi static
}