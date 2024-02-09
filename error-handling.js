function divide(x, y) {
    try {
        const result = x / y;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        console.log("This block always executes.");
    }
}

divide(10, 2);   // Result: 5
divide(10, 0);


try {

    console.log('Start of try runs');  // (1) <--

    lalala; // error, variable is not defined!

    console.log('End of try (never reached)');  // (2)

} catch (err) {

    console.log(`Error has occurred!`); // (3) <--

}


try {
    noSuchVariable; // script will die here

} catch (err) {
    console.log("won't work");
}



try {
    // lalala; // error, variable is not defined!
    let err = new Error();
    throw (err);
    throw (SyntaxError("L lag gaye."));
} catch (err) {
    console.log("Name:", err.name); // ReferenceError
    console.log("Message:", err.message); // lalala is not defined
    console.log("List stack:", err.stack); // ReferenceError: lalala is not defined at (...call stack)

    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    // console.log(err); // ReferenceError: lalala is not defined
}


let jsondata = '{"name1":"dhruvil","age":25}';

try {
    let user = JSON.parse(jsondata);
    if (!user.name) {
        throw new SyntaxError("Give me name of user .");
    }
    console.log("User is passsed");
} catch (err) {
    console.log("Name:", err.name); // ReferenceError
    console.log("Message:", err.message); // lalala is not defined
    console.log(err);
}


let json = '{"name":"dhruvil","age":25}'; // incomplete data
try {

    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }

    // blabla(); // unexpected error

    console.log(user.name);

} catch (err) {
    if (err instanceof SyntaxError) {
        console.log("JSON Error: " + err.message);
    } else {
        try {
            throw err; // rethrow (*)
        } catch (error) {
            console.log("Error in pre:"+err);
        }   
        
    }
}
finally{
    console.log("Code is executed.");
}
console.log("HEllo");

let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occurred");

alert( `execution took ${diff}ms` );


