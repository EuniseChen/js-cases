// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const love = 'love';
const letters = [...love];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'jin';

const friends = [ bestFriend,...boys, ...girls];
console.log(friends);

const newFriends = [...friends]
newFriends[0] = 'helen'

console.log(newFriends);
console.log(friends);

// Object
const person = { name: 'john', job: 'developer'}
const newPerson = { ...person,city:'new-york',job:'designer'  }
console.log(person);
console.log(newPerson);

