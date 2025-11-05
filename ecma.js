const fruit =['bana','apple', 'ananas']

const display= function(fruit,key,array){
    console.log(array[key-1])
    console,log(`${key} : ${fruit[key]}`)
}

fruit.forEach(display)