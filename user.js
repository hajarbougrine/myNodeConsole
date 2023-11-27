class User {
    constructor(id, name) {
      this._id = id;
      this._name = name;
    }
  
    get id() {
      return this._id;
    }
  
    set id(newId) {
      this._id = newId;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  }
  module.exports = User;