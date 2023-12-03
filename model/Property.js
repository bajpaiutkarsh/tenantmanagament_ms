class Property {
    constructor(id = undefined, name = undefined, address = undefined) {
      this.id = id;
      this.name = name;
      this.address = address;
    }
  
    // Getter for ID
    get id() {
      return this.id;
    }
  
    // Setter for ID
    set id(newId) {
      this.id = newId;
    }
  
    // Getter for name
    get name() {
      return this.name;
    }
  
    // Setter for name
    set name(newName) {
      this.name = newName;
    }
  
    // Getter for address
    get address() {
      return this.address;
    }
  
    // Setter for address
    set address(newAddress) {
      this.address = newAddress;
    }
  }

  module.exports = Property;