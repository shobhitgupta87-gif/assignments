
let rows: number = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= rows - i; j++) {
        pattern = pattern + " ";
    }
  
    for (let k = 1; k <= i; k++) {
        pattern = pattern + "*";
    }

    console.log(pattern);
}