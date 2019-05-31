// CODE here for your Lambda Classes
//Class Person
class Person {
	constructor(name, age, location){
		this.name = name;
		this.age = age;
		this.location = location;
	}
	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)

	}
}

const JellyJack = new Person('Jack', 35, 'Austin');
	class Instructor extends Person {
		constructor(specialty, favLanguage, catchPhrase){
			super(name,age,location);
			this.specialty = specialty;
			this.favLanguage = favLanguage;
			this.catchPhrase = catchPhrase;
		}

		demo(subject) {
			console.log(`Today we are learning about ${this.subject}`);
		}
		grade(student, subject){
			console.log(`${student.name} receives a perfect score ${subject} `);
		}
	}
	//Class Student
	class Student extends Person {
		constructor(previousBackground, className, favSubjects) {
			super(name, age, location);
			this.previousBackground = previousBackground;
			this.className = className;
			this.favSubjects = favSubjects;
		}

		listsSubjects(favSubjects) {

			console.log(this.favSubjects);
		}

		PRAssignment(subject) {
			console.log(`${student.name} has submitted a PR for ${subject}`);
		}

		springChallenge(subject) {
			console.log(`${student.name} has begun sprint challenge on ${subject}`);
		}
	}
	// //Test
	// const JellyJack = new Person('Jack', 35, 'Austin');
	JellyJack.speak();
