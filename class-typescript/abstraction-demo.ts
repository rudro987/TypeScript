abstract class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  abstract display(): void;
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
    );
  }
}

let student1 = new Student("John", 30, 1302523);
student1.display();

// let user1 = new User("John", 30);
// user1.display();

// class object