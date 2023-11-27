class Person {
    constructor(name, dateOfBirth) {
      this._name = name;
      this._dateOfBirth = dateOfBirth;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  
    get dateOfBirth() {
      return this._dateOfBirth;
    }
  
    set dateOfBirth(newDateOfBirth) {
      this._dateOfBirth = newDateOfBirth;
    }
  }
  
  module.exports = Person;