  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

//I want to iterate through this array and create a new array of only the people 
//who are old  enough to drink alcohol - those who are at least 21 years old.

oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

//How might you use the filter method to filter that array down to just paul?

const paul = people.filter(person => person.name ==="Paul")[0];
console.log(paul)

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

//5.	My goal is to create a list of job interview  candidates by filtering 
//out any students who don’t have at least 5 years of experience  in at least one skill

const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student =>  student.skills.filter(has5yearsExp).length > 0;
const candidates = students.filter(hasStrongSkills);
console.log(candidates);

//Use the map() method to get only the qualifying candidates’ 
//names from what we’ve got here? 

const names = candidates.map(candidates => candidates.name);
console.log(names);


// Filter Challenge

//You will create a single line of code that should filter the students array and return 
//only the items whos maths scores are greater than or equal to  90.  As this needs to be done in a single line of code, 
//you will also be required to use an arrow function that does not have a return statement.

//1. Create a variable named: topMaths using the const keyword
//2. Assign it a value from using the filter method on the students array
//3. Use a single line arrow function within the filter method (should not use a return statement)
//4. Log out the variable topMaths

let studentss = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 84, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 67, english: 87, art: 95},
  }
];

//Write code here
const topMaths = studentss.filter(itm => itm.results.maths >= 90);
console.log(topMaths);