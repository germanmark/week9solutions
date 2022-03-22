// W9A: Variables and Conditionals
console.log("W9A :\n\n");
var age = 20;
var is_subscribed = false;

// Solution 1: 4 cases

if (age < 18 && !is_subscribed){
    console.log("The user is younger than 18 and isn't subscribed");
} else if (age < 18 && is_subscribed){
    console.log("The user is younger than 18 and is subscribed");
} else if (age >= 18 && !is_subscribed) {
    console.log("The user is older than 18 and is not subscribed");
} else if (age >= 18 && is_subscribed){
    console.log("The user is older than 18 and is subscribed");
} else {
    console.log("Something went wrong");
}

// Solution 2: nested conditions

if (age < 18){
    if (is_subscribed){
        console.log("The user is younger than 18 and is subscribed");
    }else{
        console.log("The user is younger than 18 and is not subscribed");
    }
} else if (age >= 18){
    if (is_subscribed){
        console.log("The user is older than 18 and is subscribed");
    } else{
        console.log("The user is older than 18 and is not subscribed");
    }
}



// W9B: Simple user array
console.log("\n\n\nW9B :\n\n");


var ages = [18, 19, 17, 20, 16, 21];
var subscriptions = [true, false, false, true, true, false];

for (let i = 0; i<ages.length; i++){
    // We will construct our message into this variable
    var message = "";
    if (ages[i] >= 18){
        message = "is older than 18";
    } else {
        message = "is younger than 18";
    }

    if (subscriptions[i]){
        // We append the second half of the message to the above
        message = message + " and is subscribed";
    } else {
        // This is a shorter way of doing 'variable1 = variable1 + variable2'
        message += " and is not subscribed";
    }
    console.log(`User ${i} ${message}`);
}


// W9C: Array of tweets

console.log("\n\n\nW9C :\n\n");

var tweets = [
    {
        tweet : "We passed upon the stair",
        username : "Jack",
        createdAt : "01-01-2022",
        age : 18
    },
    {
        tweet : "We spoke of was and when",
        username : "Jane",
        createdAt : "02-01-2022",
        age : 29
    },
    {
        tweet : "Although I wasn't there",
        username : "John",
        createdAt : "03-01-2022",
        age : 20
    },
    {
        tweet : "He said I was his friend",
        username : "Jill",
        createdAt : "04-01-2022",
        age : 16
    },
    {
        tweet : "Which came as a surprise",
        username : "Jeremy",
        createdAt : "05-01-2022",
        age : 17
    },
    {
        tweet : "I spoke into his eyes",
        username : "Jackie",
        createdAt : "06-01-2022",
        age : 35
    },
    {
        tweet : "I thought you died alone",
        username : "Jordan",
        createdAt : "07-01-2022",
        age : 55
    },
    {
        tweet : "A long long time ago",
        username : "Jasmine",
        createdAt : "08-01-2022",
        age : 20
    },
    {
        tweet : "Oh no, not me",
        username : "George",
        createdAt : "09-01-2022",
        age : 67
    },
    {
        tweet : "We never lost control",
        username : "Julie",
        createdAt : "10-01-2022",
        age : 22
    },
    {
        tweet : "You're face to face",
        username : "James",
        createdAt : "11-01-2022",
        age : 23
    },
    {
        tweet : "With the man who sold the world",
        username : "Jenny",
        createdAt : "12-01-2022",
        age : 24
    }
]

// A "for - of" loop is another way to iterate through complex data structures
for (let tweet of tweets){
    console.log(`"${tweet.tweet}" - ${tweet.username}, ${tweet.createdAt}`);
}


// W9D: Creating custom functions

console.log("\n\n\nW9D :\n\n");

function addAndMultiply(num1, num2){
    // Don't forget about arithmetic order of operations, it's always safest to wrap each operation with a pair of brackets
    return ((num1+num2)*5);
}

function checkStringLength(string){
    if (string.length > 10){
        return true;
    } else {
        return false;
    }
}

function checkStringLengthTernary(string){
    // This utilizes an operation known as the 'ternary operator', which is a shorthand assignment of value based on a condition. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    return (string.length > 10 ? true : false);
}

function checkStringLengthShortest(string){
    // Since the result of the condition is what we want to return, we can do just that
    return (string.length > 10);
}

function loopStartsWith(array){
    for (let str of array){
        if (str.startsWith("ph")){
            return str;
        }
    }
    // If we reached this part, that means that the loop ended without returning. We are better off explicitly returning 'undefined' for readability purposes.
    return undefined;
}

// This function can be used as a filtering function when combined with other array built-ins
function startsWithFilter(str){
    return str.startsWith("ph");
}

function findStartsWith(array){
    // The 'find' built-in will return the first element that passes the filtering condition
    return array.find(startsWithFilter);
}

var arr1 = ["peach", "mango", "phone", "photo", "melon", "berry"];


console.log(addAndMultiply(1,2));
console.log(addAndMultiply(0,5));
console.log(addAndMultiply(-3,-6));


// Outputs should be identical
console.log(checkStringLengthTernary("ThisIsAVeryLongString"));
console.log(checkStringLength("ThisIsAVeryLongString"));
console.log(checkStringLengthShortest("ThisIsAVeryLongString"));

// Outputs should be identical
console.log(checkStringLengthTernary("short"));
console.log(checkStringLength("short"));
console.log(checkStringLengthShortest("short"));


// These two outputs should be identical regardless of the implementation
console.log(loopStartsWith(arr1));
console.log(findStartsWith(arr1));


// W9E: Advanced array operations and functions

console.log("\n\n\nW9E :\n\n");

function ageFilter(tweetObj){
    return (tweetObj.age >= 18);
}

var filteredTweets = tweets.filter(ageFilter);

for (let tweet of filteredTweets){
    console.log(`"${tweet.tweet}" - ${tweet.username}, ${tweet.createdAt}`);
}