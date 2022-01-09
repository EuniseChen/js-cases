// filter returns a new array, can manipulate the size of new array(unlike map), returns based on condition
// find -returns single instance, return first match, if no match - undefined.

const people = [
  {
    name: 'Jin',
    age: '20',
    position: 'dev',
  },
  {
    name: 'Jack',
    age: '21',
    position: 'design',
  },
  {
    name: 'JJ',
    age: '25',
    position: 'boss',
  },
  {
    name: 'Jacky',
    age: '30',
    position: 'intern',
  },
];

const youngPeople = people.filter((person) => person.age < 25);
console.log(youngPeople);

const developers = people.filter((person) => person.position === 'dev');
console.log(developers);

const backend = people.filter((person) => person.position === 'backend');
console.log(backend);

const old = people.find((person) => person.age > 30)
console.log(old);

const young = people.find((person) => person.age < 25)
console.log(young);


