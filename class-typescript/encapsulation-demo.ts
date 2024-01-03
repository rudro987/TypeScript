// public, private, protected, readonly

class User {
    public userName: string;
    public age: number;
  
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
    display(): void {
        console.log("Hi");
    };
  }
  
  class Student extends User {
    private studentId: number;
    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
      );
    }
    setStudentId(studentId: number): void{
        this.studentId = studentId;
    }
    getStudentId(): number{
        return this.studentId;
    }
  }
  
  let student1 = new Student("John", 30, 1302523);
  student1.setStudentId(1302524);
  student1.getStudentId();
  student1.display();