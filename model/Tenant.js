class Tenant {
    constructor(id=undefined,
        name=undefined,
        propertyId = undefined,
        startDate=undefined,
        endDate=undefined,
        startMeterReading=undefined,
        endMeterReading=undefined,
        lastBillDate=undefined,
        lastPaidDate=undefined,
        pendingAmount=undefined) {
        if(id){
           this.id=id
        }
        if(name){
           this.name=name
        }
        if(propertyId){
            this.propertyId = propertyId;
        }
        if(startDate){
           this.startDate=startDate
        }
        if(endDate){
           this.endDate=endDate
        }
        if(startMeterReading){
           this.startMeterReading=startMeterReading
        }
        if(endMeterReading){
           this.endMeterReading=endMeterReading
        }
        if(lastBillDate){
           this.lastBillDate=lastBillDate
        }
        if(lastPaidDate){
           this.lastPaidDate=lastPaidDate
        }
        if(pendingAmount){
           this.pendingAmount=pendingAmount
        }
       
    }
    //  getter for ID
     getid() {
        return this.id;
    }

    //  setter for ID
     setid(newId) {
        this.id = newId;
    }
     //  getter for endDate
     getpropertyId() {
        return this.propertyId;
    }

    //  setter for endDate
     setpropertyId(newpropertyId) {
        this.propertyId = newpropertyId;
    }


    //  getter for name
     getname() {
        return this.name;
    }

    //  setter for name
     setname(newName) {
        this.name = newName;
    }

    //  getter for startDate
     getstartDate() {
        return this.startDate;
    }

    //  setter for startDate
     setstartDate(newStartDate) {
        this.startDate = newStartDate;
    }

     //  getter for startDate
     getstartMeterReading() {
        return this.startMeterReading;
    }

    //  setter for startDate
     setstartMeterReading(newStartMeterReading) {
        this.startMeterReading = newStartMeterReading;
    }
    
     //  getter for endDate
     getendMeterReading() {
        return this.endMeterReading;
    }

    //  setter for endDate
     setendMeterReading(newendMeterReading) {
        this.endMeterReading = newendMeterReading;
    }


    //  getter for endDate
     getendDate() {
        return this.endDate;
    }

    //  setter for endDate
     setendDate(newEndDate) {
        this.endDate = newEndDate;
    }

    //  getter for lastBillDate
     getlastBillDate() {
        return this.lastBillDate;
    }

    //  setter for lastBillDate
     setlastBillDate(newLastBillDate) {
        this.lastBillDate = newLastBillDate;
    }

    //  getter for lastPaidDate
     getlastPaidDate() {
        return this.lastPaidDate;
    }

    //  setter for lastPaidDate
     setlastPaidDate(newLastPaidDate) {
        this.lastPaidDate = newLastPaidDate;
    }

    //  getter for pendingAmount
     getpendingAmount() {
        return this.pendingAmount;
    }

    //  setter for pendingAmount
     setpendingAmount(newPendingAmount) {
        this.pendingAmount = newPendingAmount;
    }

}

module.exports = Tenant;