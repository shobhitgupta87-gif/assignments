//1. Temperature of a city in degrees Celsius: 25.5

let degrees:number = 25.5;
console.log(`The temperature is ${degrees} degrees Celsius.`);
console .log('The temperature is',degrees + " "+'degree celcius'); 
console .log('The temperature is' +degrees + " "+'degree celcius'); 


 //2. Whether a customer has placed an order: true or false
let orderPlaced:boolean = false;
console.log(`The customer has placed an order: ${orderPlaced}`);
orderPlaced = true;
console.log(`The customer has placed an order: ${orderPlaced}`);

//OR
if(orderPlaced)
{
    console.log(`The customer has placed an order: ${orderPlaced}`);
}
else
{
    console.log('The customer has not placed an order');
}

// //3. Person's phone number: "123-456-7890"
let phoneNumber:string= '123-456-7890';
console.log('The phone numnber is',phoneNumber);

//4. Amount of money in a customer's bank account: 1000.50

let accountNumnber:number = 1000.50;
console.log('The amount of money in a customer bank account is',accountNumnber);


//5. Person's email address: "john.doe@example.com"
let emailAddress:string = "john.doe@example.com";
console.log('The email address is',emailAddress);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let latitude:number = 37.7749;
let longitude:number = -122.4194;
console.log('The coordinates of the location are:', latitude, longitude);

//OR

interface Cord {
    "latitude": number;
    "longitude": number;
}
let coordinates:Cord = {
    "latitude": 37.7749,
    "longitude": -122.4194
};
console.log('The latitude is:', coordinates.latitude);
console.log('The longitude is:', coordinates.longitude);

// //7.Person's marital status: true or false
let maritalStatus:boolean = true;
 console.log('The person is married:', maritalStatus);
 maritalStatus = false;
 console.log('The person is married:', maritalStatus);

// //8. Person's occupation: "Software Engineer"
let occupation:string = "Software Engineer";
console.log(`The person occupation is ${occupation}`);

//9. Person's favourite colour: "Blue"

let color:string = "Blue";
console.log(`The colour name is ${color}`);   

// //10.Current year: 2026
let currentYear:number = 2026;
console.log(`The current year is ${currentYear}`);

//OR

let date1:Date = new Date();
console.log('The current year is', date1.getFullYear());

//11.Number of followers on a social media platform: 1,000,000

//  let followers:number = 1000000;
 console.log(`The number of followers on a social media platform is ${followers}`);

//  //to print with commas
 console.log(`The number of followers on a social media platform is ${followers.toLocaleString("en-US")}`);


// //12.Rating of a movie: 7.5
let rating:number = 7.5;
console.log('The rating of the movie is:',rating);

// //13.Person's blood type: 'A'

let bloodType:string = 'A';
console.log(`The person's blood type is ${bloodType}`);

// //14.Title of a book: "To Kill a Mockingbird"
let bookTitle:string = "To Kill a Mockingbird";
console.log(`The title of the book is ${bookTitle}`);


// //15.Number of employees in a company: 500
let employeeCount:number = 500;
console.log(`The number of employees in the company is ${employeeCount}`);

//16.Time of an event: 2:30 PM
let time:string = "2:30 PM";
console.log(`The time of the event is ${time}`);

//17.Name of a country: "United States"
let country:string = "United States";
console.log(`The name of the country is ${country}`);

//18.Person's eye color: "Brown"
let eyeColor:string = "Brown";
console.log(`The person's eye color is ${eyeColor}`);

//19.Person's birthplace: "New York City"
let birthplace:string = "New York City";
console.log(`The person's birthplace is ${birthplace}`);

//Distance between two cities: 200.5
let distance:number = 200.5;
console.log(`The distance between the two cities is ${distance} kilometers.`);
