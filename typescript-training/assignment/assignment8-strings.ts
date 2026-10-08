
//Count the total number of occurances in the sentence.
let originalString: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let splitString: string[] = originalString.split(" ");
let i:number = 0;

for(let search of splitString)
{
if (search=="Java")
{
i++;
}

}
console.log("The number of times Java word comes is", i);

//2. Print count and Indexes of the word

let word:string = "Java";

let index:number = originalString.indexOf(word);
console.log("The indexes of the given word are")

while(index!==-1)
{
    console.log(index)
    index = originalString.indexOf(word, index + word.length)
}




