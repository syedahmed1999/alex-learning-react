'use-strict'

/**
 * Problem 1
 * it returns the value of 100. that is a big issue with `var`
 */

var x = 5
function varExample(x) {
    var x = 15;
    {
        var x = 25;
        {
            var x = 100
        }
    }
    console.log(x)
}

varExample(x);


/**
 * Problem 2
 * As you will see that the output will be 5 5 5 5 5
 * Guess the issue ;)
 */
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 100);
}

/**
 * Problem 3 
 */

// const

const bool = true;
// bool = false;
// console.log(bool) // this will throw error

//let vs var

var topic = 'JS';
{
    var topic = 'React'
    console.log('B ' + topic)
}
console.log('G ' + topic)

let topicLet = 'JS';
{
    let topicLet = 'React'
    console.log('BLet ' + topicLet)
}
console.log('GLet ' + topicLet)


/**
 * Problem 4
 */
let first = 'Syed Ahmed', last = 'Ali';
console.log('Hi, my name is ' + first + ' ' + last);
console.log(`Hi, my name is ${first} ${last}`) // template string

