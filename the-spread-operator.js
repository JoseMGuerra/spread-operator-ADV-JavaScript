/**
 * To run this file in Gitpod, use the
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log('Second array:', arr2);
console.log('First array:', arr1);

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log('Third array:', arr3);
console.log('Fourth array:', arr4);

// Copying an object
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1, d: 4 };
let obj3 = { ...obj1, b: 5 };

console.log('Object 1:', obj1);
console.log('Object 2:', obj2);
console.log('Object 3:', obj3);

// Copying only part of an array/object
let arr5 = [...arr1, { ...obj1 }, ...arr3, 'x', 'y', 'z'];
console.log('Fifth array:', arr5);

/**
 * Steps
You will use the spread operator to copy an array which is stored in an object which itself is stored in an array. 
You will create a single line arrow function (has no return statement), which should copy an array passed in and add the value passed to it, then return the array.
1. Create a variable named subjects using the keyword let
2. Assign it a copy of the subjects array from the first object in the students array
3. Create a variable named update using the keyword const
4. Assign the variable update a single line arrow function  (should not have a return statement)
5. The arrow function should take two parameters named: item and val the arrow function should copy the array passed in and add the value passed to it, then return the array.
6. Create a variable named: updatedSubjects using the keyword let
7. Variable updatedSubjects should be assigned the return value from calling the update function passing in the subjects array and the string "Electronics"
8. Variable updatedSubjects should have the correct value
9. The original version of the subjects array in the students array should not have been modified
10. log out the variable updatedSubjects to see its value
11. log out students[0] to see that it has not been changed, if you have done everything correctly
 */
let students = [
  {
    name: 'John',
    subjects: ['maths', 'english', 'cad'],
    teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
    results: { maths: 90, english: 75, cad: 87 },
  },
  {
    name: 'Emily',
    subjects: ['science', 'english', 'art'],
    teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
    results: { science: 93, english: 80, art: 95 },
  },
  {
    name: 'Adam',
    subjects: ['science', 'maths', 'art'],
    teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
    results: { science: 63, maths: 87, art: 95 },
  },
];
let subjects = [...students[0].subjects];

const update = (item, val) => [...item, val];
let updatedSubjects = update(subjects, 'Electronics');

console.log(updatedSubjects);
console.log(students[0]);
