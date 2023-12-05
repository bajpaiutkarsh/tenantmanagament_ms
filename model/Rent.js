class Rent {
    constructor(id, date, tenant, rent, pEbillUnit, cEbillUnit, amount, pendingAmount) {
      this.id = id;
      this.date = date;
      this.tenant = tenant;
      this.rent = rent;
      this.pEbillUnit = pEbillUnit;
      this.cEbillUnit = cEbillUnit;
      this.amount = amount;
      this.pendingAmount = pendingAmount;
    }
  
    // Getters
    getId() {
      return this.id;
    }
  
    getDate() {
      return this.date;
    }
  
    getTenant() {
      return this.tenant;
    }
  
    getRent() {
      return this.rent;
    }
  
    getPEbillUnit() {
      return this.pEbillUnit;
    }
  
    getCEbillUnit() {
      return this.cEbillUnit;
    }
  
    getAmount() {
      return this.amount;
    }
  
    getPendingAmount() {
      return this.pendingAmount;
    }
  
    // Setters
    setId(id) {
      this.id = id;
    }
  
    setDate(date) {
      this.date = date;
    }
  
    setTenant(tenant) {
      this.tenant = tenant;
    }
  
    setRent(rent) {
      this.rent = rent;
    }
  
    setPEbillUnit(pEbillUnit) {
      this.pEbillUnit = pEbillUnit;
    }
  
    setCEbillUnit(cEbillUnit) {
      this.cEbillUnit = cEbillUnit;
    }
  
    setAmount(amount) {
      this.amount = amount;
    }
  
    setPendingAmount(pendingAmount) {
      this.pendingAmount = pendingAmount;
    }
    getTotalBillAmount(chargePerUnit){
        let totalBillAmount = this.rent + this.pendingAmount + (this.cEbillUnit - this.pEbillUnit)*chargePerUnit;
        
    }
  }
  module.exports = Rent;