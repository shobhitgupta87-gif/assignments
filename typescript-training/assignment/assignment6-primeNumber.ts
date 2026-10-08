
let n:number = 8;
let isPrime:boolean = true;

if (n <= 1) 
    {
    isPrime = false;    
    console.log(isPrime);
    
}
else if (n==2)
{
    isPrime = true;
    console.log(isPrime);
}
else
{
for (let i:number = 2; i <= n-1; i++) 
    {
if (n % i == 0) 
    {
    isPrime = false;
    console.log(isPrime);
    break;  
}
else
{
    isPrime = true;
    console.log(isPrime);
    break;
}
    }
}

    
