// CODE here for your Lambda Classes
//Class Person
class Person {
	constructor(attr){
		this.name = attr.name;
		this.age = attr.age;
		this.location = attr.location;
	}
	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)

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

		listsSubjects() {

			console.log(`This is a list of ${this.name}'s favorite subjects.`);
			let subArray = [];
			let item = 0;
			subArray = this.favSubjects;
			for(item in subArray) {
				console.log(`subject: ${subArray[item]}`);
			}

		}

		PRAssignment(student, subject) {
			console.log(`${student} has submitted a PR for ${subject}.`);
		}

		sprintChallenge(student, subject) {
			console.log(`${student} has begun sprint challenge on ${subject}.`);
		}
	}

	const fred = new Student({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  previousBackground: 'Science Teacher',
  className: 'WebPT07',
  favSubjects: ['Illustration','Biology','C#']
});


//Class Instructor
	class Instructor extends Person {
		constructor(specialty, favLanguage, catchPhrase){
			super(name,age,location);
			this.specialty = specialty;
			this.favLanguage = favLanguage;
			this.catchPhrase = catchPhrase;
		}

		demo(subject) {
			console.log(`Today we are learning about ${subject}.`);
		}
		grade(student, subject) {
			console.log(`${student} receives a perfect score ${subject} `);
		}
	}
	
	const Jack = new Instructor({
		name: 'Jack',
		location: 'Houston',
		age: 26,
		specialty: 'Singing',
		favLanguage: 'Python',
		catchPhrase: 'whasssuuupppp!?'
	});

	// Project Manager
	class ProjectManager extends Person {
		constructor(personAttributes) {
			super(personAttributes);
			this.gradClassName = personAttributes.gradClassName;
			this.favInstructor = personAttributes.favInstructor;
		}
		standUp(channel){
		console.log(`${this.name} announces to ${channel}, @channel standy times!`);
		}

		debugsCode(student, subject) {
			console.log(`${name} debugs ${student.name}'s code on ${subject}.'`)
		}
	}
	const Jill = new ProjectManager({
		name: 'Jill',
		location: 'Arlington',
		age: 32,
		gradClassName: 'WebPT07',
		favInstructor: 'Josh'
	});

	fred.speak();
	fred.listsSubjects();
	fred.sprintChallenge(fred.name, fred.favSubjects[0]);
	Jack.demo(fred.favSubjects[1]);
	Jack.grade(fred.name,fred.favSubjects[2]);
	console.log(Jack.catchPhrase);
	Jill.standUp(fred.className);
	Jill.debugsCode(fred.name,fred.favSubjects[2]);
