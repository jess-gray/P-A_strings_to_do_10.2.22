// #1 Create a function that, given a string, returns all of that string’s contents, but without blanks. 
function removeBlanks(string){
    var newString = ''
    for(var i = 0; i < string.length; i++){
        if(string[i] != ' '){

        newString += string[i]
    }
}
    return newString
}

console.log(removeBlanks("t a co cat taco c a t"))

// #2Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
function getDigits(string){
    var numbers = ''
    for(var char in string){
        if(!isNaN(string[char])){ //checks to see if it is a number
            numbers += string[char]
        }
        
    }
    return Number(numbers) //returns as a number
}
console.log(getDigits('tac99c4tt4c0c4t'))

// #3Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

function acronym(string){
    var theAcyms = string.split(' ')
    console.log(theAcyms)
    var firstLetters = ''
    for(var char in theAcyms){
        if(theAcyms[char].length > 0){
            firstLetters += theAcyms[char][0]
        }
    }
    return firstLetters.toUpperCase()  //this capitalizes
}

console.log(acronym('never eat shredded wheat'))


// #4 Create a function that, given a string, returns the number of non-space characters found in the string. 

function countNonSpaces(string){
    var numOfnonSpaces = 0
    for(var char in string){
        if(string[char] != ' '){
            numOfnonSpaces = numOfnonSpaces + 1 //could also do numOfSpaces++
        } 
    }
    return numOfnonSpaces
}


console.log(countNonSpaces('Cats are cool and so are dogs'))


// #5 Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
function removeShorterSrings(array,value){
    var newArr = []
    var index = 0 
    for(var char in array){
        if(array[char].length >= value){
            newArr[index++] = array[char] //This is so it loops through all, without this it would just return last one that it looped through that met those requirements. 
        } 
    }
    return newArr
}

console.log(removeShorterSrings(['Good morning', 'star', 'shine', 'the', 'earth', 'says', 'hello'], 5))