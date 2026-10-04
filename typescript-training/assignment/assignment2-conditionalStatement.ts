

// console.log("Checking for the loan eligibility"
// );
// userEligibility("John Doe", 720, 55000, true, 35);

// function userEligibility(customerName: string,creditScore: number,income: number,isEmployed: boolean,debtToIncomeRatio: number): void
// {
//     if(creditScore>750)
//     {
//         console.log(`${customerName} is eligible for the loan.`);
//     }
//     else if(creditScore>=650 && creditScore<=750)
//     {
//         if(income>50000)
//         {
//             if(isEmployed)
//             {
//                 if(debtToIncomeRatio<40)
//                 {
//                     console.log(`${customerName} is eligible for the loan.`);
//                 }
//                 else
//                 {
//                     console.log(`${customerName} is not eligible for the loan.`);
//                 }
//             }
//             else
//             {
//                 console.log(`${customerName} is not eligible for the loan.`);
//             }
//         }
//         else
//         {
//             console.log(`${customerName} is not eligible for the loan.`);
//         }
//     }
//     else
//     {
//         console.log(`${customerName} is not eligible for the loan.`);
//     }
// }


//OR
console.log("Checking for the loan eligibility");
 userEligibility("John Doe", 720, 55000, true, 35);

function userEligibility(customerName: string,creditScore: number,income: number,isEmployed: boolean,debtToIncomeRatio: number): void
{
       if(creditScore>750)
 {
      console.log(`${customerName} is eligible for the loan.`);
    }
  else if(creditScore>=650 && creditScore<=750 && income>50000 && isEmployed && debtToIncomeRatio<40)
    {
      console.log(`${customerName} is eligible for the loan.`);
    }
  else
    {
      console.log(`${customerName} is not eligible for the loan.`);
    }
}