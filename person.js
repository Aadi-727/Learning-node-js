// console.log(__dirname, __filename);
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greeting() {
		console.log(`Hello ${this.name} you are ${this.age} year's old!`);
	}
}
module.exports = Person;
