
interface employee {   
    name: string[] ,
    basicSalary: number[],
    experience: number[],
    yearEndRating: number[]
}

// interface hike {

// rating: number[],
// variablePay: number[],
// bonus: number[],
// }

let empdata: employee = {
    name: ["Alice Johnson", "Bob Smith", "Carol Davis", "David Brown","Eva Green"],
    basicSalary: [75000, 68000, 82000, 90000,60000],
    experience: [5.1, 3.2, 7.1, 10.2, 2.4],
    yearEndRating: [4.2, 3.8, 4.5, 2.5,3.5]
};

const employeeMap = new Map<string, number>();

for(let i=0;i<empdata.name.length;i++)
{
    if (empdata.yearEndRating[i] >= 4.0)
 {  
    let variablePay: number = 0.15
    let bonus: number = 1500;
    let reward: number = 5000;

        if(empdata.experience[i] >= 5.0)
        {
  let totalHike: number = empdata.basicSalary[i] * variablePay + bonus + reward;
    let hikePercentage: number = totalHike / empdata.basicSalary[i]*100 ;
    console.log(`The total hike for ${empdata.name[i]} is: ${totalHike}`);
    employeeMap.set(empdata.name[i], hikePercentage);
        }
        else if(empdata.experience[i] < 5.0)
{
    let totalHike: number = empdata.basicSalary[i] * variablePay + bonus;
    let hikePercentage: number = totalHike / empdata.basicSalary[i]*100 ;
    console.log(`The total hike for ${empdata.name[i]} is: ${totalHike}`);
    employeeMap.set(empdata.name[i], hikePercentage);
}
 

    } 
    
    else if (empdata.yearEndRating[i] >= 3.0 && empdata.yearEndRating[i] < 4.0 )
     {
    let variablePay: number = 0.10;
    let bonus: number = 1200;
    let reward: number = 5000;

    if(empdata.experience[i] >= 5.0)
        {
  let totalHike: number = empdata.basicSalary[i] * variablePay + bonus + reward;
    let hikePercentage: number = totalHike / empdata.basicSalary[i]*100 ;
    console.log(`The total hike for ${empdata.name[i]} is: ${totalHike}`);
    employeeMap.set(empdata.name[i], hikePercentage);
        }
        else if(empdata.experience[i] < 5.0)
{
    let totalHike: number = empdata.basicSalary[i] * variablePay + bonus;
    let hikePercentage: number = totalHike / empdata.basicSalary[i]*100 ;
    console.log(`The total hike for ${empdata.name[i]} is: ${totalHike}`);
    employeeMap.set(empdata.name[i], hikePercentage);
}
     }
 else if (empdata.yearEndRating[i] < 3.0)
     {
    let variablePay: number = 0.03;
    let bonus: number = 300;
    let reward: number = 5000;

    if(empdata.experience[i] >= 5.0)
        {
  let totalHike: number = empdata.basicSalary[i] * variablePay + bonus + reward;
    let hikePercentage: number = totalHike / empdata.basicSalary[i]*100 ;
    console.log(`The total hike for ${empdata.name[i]} is: ${totalHike}`);
    employeeMap.set(empdata.name[i], hikePercentage);
        }
        else if(empdata.experience[i] < 5.0)
{
    let totalHike: number = empdata.basicSalary[i] * variablePay + bonus;
    let hikePercentage: number = totalHike / empdata.basicSalary[i]*100 ;
    console.log(`The total hike for ${empdata.name[i]} is: ${totalHike}`);

    //to updtae the employee name and hike percentage in the map    
    employeeMap.set(empdata.name[i], hikePercentage);
}
}

}
//to print the map of employee name and hike percentage
console.log('The employee name and hike percentage are:');
for (let [name, hikePercentage] of employeeMap)
     {
    console.log(name, hikePercentage);

}
