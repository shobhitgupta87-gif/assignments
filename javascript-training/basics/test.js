
//Non Mutable date type and example of mutable data type: Number
// let a = 10;
// let b = a + 10;
// a= 5;
// console.log(a);
// console.log(b);

// let name = "Shobhit";
// let anotherName = name;
// name = "Rahul";
// console.log(name);       
// console.log(anotherName);


//Mutable data type and example of mutable data type: Object

// let empData = {
//     "name": "Bharath",
//     "id": 1234
// }
// empData.age = 35;
// empData.name = "Shobhit";
// console.log(empData);
// let num1 = 10;
// let num2 = 10.65;
// num1;

// console.log(typeof num1);
// console.log(typeof num2);

// let firsdName = "Shobhit";
// let lastName = "Kumar";
// let num = 10;
// //let fullName = firsdName + lastName;
// console.log(`the first name is ${firsdName} and the last name is ${lastName}`);



// let empAge = null ;
// console.log(typeof empAge);

let countryOfOrigin = Symbol();
let productInfo = {
    "productName": "Laptop",
    "productId": 1234,
    [countryOfOrigin]: "China",
    "countryOfOrigin": "India"
}


console.log(productInfo);
console.log(productInfo.countryOfOrigin);
console.log(productInfo[countryOfOrigin]);