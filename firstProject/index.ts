class Student {
  name: string;
  NIM: string;
  IPK: number;

  constructor(name: string, NIM: string, IPK: number) {
    this.name = name;
    this.NIM = NIM;
    this.IPK = IPK;
  }

  getDetails() {
    return `Your name ${this.name}, NIM ${this.NIM} with IPK ${this.IPK}`;
  }
}

const student1 = new Student("Lee", "G64190025", 3.59);
console.log(student1.getDetails());
