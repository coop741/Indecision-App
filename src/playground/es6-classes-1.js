class Person {
  // default value defined in parameter
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting() {
    // return 'Hi. I am ' + this.name + '!'
    // Template string
    return `Hi. I am ${this.name}!`
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person('John Smith', 22);
console.log(me.getGreeting())
console.log(me.getDescription())

const anon = new Person();
console.log(anon.getGreeting())
console.log(anon.getDescription())