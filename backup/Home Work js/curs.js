// Exercitiul 1//
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
//------------------------------------------//

// Exercitiul 2//
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}
//---------------------------------------------//
// Exercitiul 3//
const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

//--------------------------------//

//Exercitiul 4//
const arr = [1, 5, 3, 9, 14];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
//----------------------------------------------//
// Exercitiul 5 //
const arr = [1, 2, 3, 4, 5, 7, 1, 12, 15, 3, 7, 8, 12, 7, 3, 6];
const target = 7;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    count++;
  }
}

console.log(count);

// Challange //

for (let i = 0; i < 10; i++) {
  let row = "";
  for (let j = 0; j < 10; j++) {
    if ((i + j) % 2 === 0) {
      row += "0 ";
    } else {
      row += "1 ";
    }
  }
  console.log(row);
}
