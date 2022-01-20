const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];

// map method 可以遍历数组，它的第一个参数是element，第二个是index，第三个是array
// 案例1
const ages = people.map((person) => {
  return person.age + 100
})
console.log(ages)

// // 案例2 封装函数
// const getAges = person => person.age + 100
// const ages = people.map(getAges)
// console.log(ages)

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    positionName: `(${item.position})`
  }
})
console.log(newPeople);

const names = people.map((peopleName) => `<button>${peopleName.name}</button>`)
const result = document.querySelector('#result')

result.innerHTML = names.join(``)

// 第一个字母大写
const unames = ["alice", "bob", "charlie", "danielle"]
const capitalized = unames.map((name) => {
  return name[0].toUpperCase() + name.slice(1)
})
console.log(capitalized);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const paragraph = pokemon.map((item) =>`<p>${item}</p>`
)
console.log(paragraph);
