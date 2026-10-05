
let amount:number[] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];

let positiveAmount:number[] = [];
let negativeAmount:number[] = [];

for (let eachAmount of amount)
{
    if(eachAmount>0)
    {
        positiveAmount.push(eachAmount);
    }
    else
    {
        negativeAmount.push(eachAmount);
    }
}

//Print total number of credit and debit transactions completed

console.log('The total number of positive amount are: ' , positiveAmount.length); //output-3
console.log('The total number of negative amount are: ' , negativeAmount.length); //output - 5

//2. Print the total amount credited and debited in account

let positiveSum:number = 0;
for(let eachPositiveAmount of positiveAmount)
{
    positiveSum = positiveSum + eachPositiveAmount;
}
console.log('The total amount credited are: ' , positiveSum); //output- 57000

let negativeSum:number = 0;
for(let eachNegativeAmount of negativeAmount)
{
    negativeSum = negativeSum + eachNegativeAmount;
}
console.log('The total amount debited are: ' , negativeSum); //output- -18500

//3. Print total amount remaining at the end in Bank Account

let remainingBalance:number = positiveSum + negativeSum;
console.log('The remaining balance is: ' , remainingBalance); //output- 38500

//4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
//Transaction with Amount” and also print total number of suspicious transactions

let suspiciousCount:number = 0;
for(let eachAmount of amount)
{
    if(eachAmount>10000)
    {
        console.log('Suspicious credit transaction with Amount: ' , eachAmount);
        suspiciousCount++;
    }
    else if(eachAmount<-10000)
    {
        console.log('Suspicious debit transaction with Amount: ' , eachAmount);
        suspiciousCount++;
    }
}
console.log('The total number of suspicious transactions are: ' , suspiciousCount);