class Human {
  gender = 'male';
  
  printMyGender = () => {
    console.log(this.gender);
  }
}
class Person extends Human {
   gender = 'female';
   name = 'Max';
  
 printMyName = () => {
   console.log(this.name);
 }
}

const person = new Person();
person.printMyName();
person.printMyGender();