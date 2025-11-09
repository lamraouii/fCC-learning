const fruit =['bana','apple', 'ananas']
const fruité =['banaé','appleé', 'ananasé']
/* 
const display= function(q,key,array){
    console.log(array[key])
    console.log(`${key} : ${q}`)
}

fruit.forEach(display)


for (const fruits of fruit){
document.writeln(fruits )
}

let numbers=[1,2,3,4,55,6]
*/
// numbers=numbers.map(function (value) {
//     return value*2
// })

// numbers=numbers.filter(function (value) {
//     return value  >= 3;
// })

// numbers=numbers.some(function (value) { //boolen return
//     return value  === 33;  // wach kayna at last 3 w7da 
// })

// numbers=numbers.every(function (value) { //boolen return
//     return value  < 33;  // wach kayna at last 3 w7da 
// })

// let fil=[1,2,3,4,5]
// let dh= fil.reduce(function(v,w){
//     return v+w
// },-1)
// hadi feha bhal boucle lmhm katred 1 elem, 3la hssab traitemrnt f callback


// console.log(dh)

        /////math::::
// function execute(){
//     let number = document.querySelector('#entre').value
    
    // trunc kared only decim frm the mbr :
    // exp: -15.5 --> -15 
    // let result= Math.trunc(number);

    //sign 1 pos  -1 neg   0null   
    // let result = Math.sign(number)

    // curbt -> jid3 mok3ab



    // documNent.querySelector('#entre').value=''
    // document.querySelector('#result').value= result
    // console.log(result)



    // Number.isInteger
    //isNaN()


//SET  has values uniq


/*
let setc = new Set()
setc.add('maroc')
setc.add('maroc1')
setc.add('maroc2')
setc.add('maroc') /// hadi maghdkhelch


setc.has('maroccc') //false
// setc.size /// hadi attribut
console.log(setc.keys())
*/

//MAP  bhal dictionaire + unique values of keys ofcrs
/*
let map = new Map()
map.set('1',{age:22})
map.set(true,'mouad')
map.set(2,'mouad')
map.set('1',{name:'admin'})
console.log(map)

*/



/*
// TODO: DESTRUCTURING - katkhdm m3a table objects ...
    // bhala ktfrtk ot3tena dkchy sous frm vars !
let countries=['maroc','maroc','algerie','ghana', 'argentina']

const [a ,, ...c]= countries 
// hna n9zna lval2 (drna ,,)  o zdna rest f C
console.log(c)

    //hadi destructuring pour les objects
const player ={nb:10 , name :'messi', alias: 'goat'}
let {alias ,trophy = 'WC' ,...aliass}= player
console.log(trophy)

*/

// import & modules
/*
import name,{club} from './user.js';  // ila drna lheh export default knrj3o ghiu hja w7da obla {} hna, ila kano 2 hwayj wlla kter makniroch default o kandiro {} hna 

console.log(club, name)

alert(name)
*/


// class and POO
/*

import {User,Goat} from "./user.js"

let user1 = new User('messi', 'goat')
console.log(user1)
user1.addTrohpy(5)
console.log(user1.displaystats())
console.log(user1.isgoat)
// console.log(user1.#nb)
console.log(user1.getnb())

*/


// The most important one: Promesses
    // js 3ndha principe d [asynch]  y3ni t9dr tkhdm 2 7wayj fde9a, tfut mn task ltask khraaa
    //lmhm machy SYNCH= tdir hja moraha haja moraha hja 

const sum = (...nbs) => nbs.reduce((som,crrnt)=> som+crrnt)   // hadi applikina feha dkchy lli t3lmna (mzl madkhlna fpromesses)
/*
setTimeout(() => {
    console.log(sum(1,2,3))
},3000)
*/


//hafin kaynf3ona promises:
 //producing code + consuming code
 /*
    const count = false

    let countFunction = function (success, error){
        
        //Pending
        setTimeout(() => {  // had setTime out ghir exmpl fhad lcase amma rah maktkunch
            
            if (count === true){
            success('yes')  //fullfield
        } else {
            error('no')     //rejected
        }
            },2000)

        
    }
 let countValue = new Promise(countFunction)

//  countValue.then((value) => console.log(value))  // fach it9da lgharad redi 3lya
 countValue.then((value) => console.log(value)).catch(ereur => console.log(ereur))

//  console.log(countValue)
*/


//FETCH API 
// its works like promesse bcz http request needs time to return smtgn 

const getProduct = async function (id){
    // await katkhdem ghir west les fcts async
    // await katsna result dlfetch
    return await fetch('https://fakestoreapi.com/products/'+id) 
            .then(response => response.json())
            .then(data => data);
        
    
    
    /*      let rslt =  fetch('https://fakestoreapi.com/products/'+id) 
            .then(response => response.json())
            .then(data => data);
        console.log('loaded 1')
        rslt =  fetch('https://fakestoreapi.com/products/'+id) 
            .then(response => response.json())
            .then(data => data);
        console.log('loaded 2')
            return rslt
    */  // try this code bla await o f devtools dir 3G lente ochuf chkun kayfut 9bel
}


console.log(getProduct(1).then(value => console.log(value)))