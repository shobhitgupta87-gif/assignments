

let originalString: string = "Java programming is fun and challenging";

// //1. Count the total no of words in the string
let splitString: string[] = originalString.split(" ");
// console.log("Total number of words:", splitString.length);

//2. Print the sentence words in reverse order.
// let reverseString:string = "";
// for(let i=splitString.length-1; i>=0;i--)

// {
// reverseString = reverseString + " "+ splitString[i];
// }
// console.log(reverseString);


3. //Convert the first character of each word to uppercase and print original sentence
 let finalString:string = ""

 for (let i = 0; i<=splitString.length-1;i++)
 {
finalString = finalString + " "+ splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
 }
 console.log(finalString)

 