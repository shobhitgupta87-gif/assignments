
let studentName:string[] = ["Suresh","Mahesh","Naresh"];
let marks:number[] = [75,80,82];
let updatedMarks:number[] = [];
let sumMarks:number = 0;
console.log('The updated marks are:');

for(let newMarks of marks)

{
   let addMarks:number = newMarks + 10;
   updatedMarks.push(addMarks);
}

for(let i=0;i<studentName.length;i++)
{
console.log(studentName[i] + ' : ' + updatedMarks[i]);
}

for(let i=0;i<studentName.length;i++)
{
    sumMarks = sumMarks + updatedMarks[i];
}

let averageMarks:number = sumMarks/studentName.length;

console.log('The average marks of all students are:',averageMarks);

