class Property {
    constructor(id = undefined, name = undefined, address = undefined, chargePerUnit = undefined, lastMeterReading = undefined) {
      if(id){
      this.id = id;
      }
      if(name){
      this.name = name;
      }
      if(address){
      this.address = address;
      }
      if(chargePerUnit){
        this.chargePerUnit = chargePerUnit;
        }
        if(lastMeterReading){
          this.lastMeterReading = lastMeterReading;
          }
    }
  
    // Getter for ID
    static getid() {
      return this.id;
    }
  
    // Setter for ID
    static setid(newId) {
      this.id = newId;
    }
  
    // Getter for name
    static getname() {
      return this.name;
    }
  
    // Setter for name
    static setname(newName) {
      this.name = newName;
    }
  
     // Getter for chargePerUnit
     static getchargePerUnit() {
      return this.chargePerUnit;
    }
  
    // Setter for chargePerUnit
    static setchargePerUnit(newchargePerUnit) {
      this.chargePerUnit = newchargePerUnit;
    }
     // Getter for lastMeterReading
     static getlastMeterReading() {
      return this.lastMeterReading;
    }
  
    // Setter for lastMeterReading
    static setlastMeterReading(newlastMeterReading) {
      this.lastMeterReading = newlastMeterReading;
    }
    // Getter for address
    static getaddress() {
      return this.address;
    }
  
    // Setter for address
    static setaddress(newAddress) {
      this.address = newAddress;
    }
  }

  module.exports = Property;