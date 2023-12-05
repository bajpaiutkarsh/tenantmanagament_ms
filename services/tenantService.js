const Tenant = require("../model/Tenant")
const { MongoClient, ObjectId } = require('mongodb');
const env = require("../environment");
class tenantService{
    static async getTenants(req, res) {
        let tenant = new Tenant();
        tenant.setname(env.URI)
        res.send(tenant)
    }

    static async postTenant(req, res){
        console.log("Registering Tenant... ");
        const client = new MongoClient(env.URI);
        try{
            const {id, name,mobile,propertyId,startDate,endDate,startMeterReading,endMeterReading,lastBillDate,lastPaidDate,pendingAmount } = req.body
            var newTenant = new Tenant(id, name,mobile, propertyId,startDate,endDate,startMeterReading,endMeterReading,lastBillDate,lastPaidDate,pendingAmount );
            var createTenant = await client.db(env.DB).collection(env.TENANTMANAGEMENT).insertOne(newTenant);
            if(createTenant){
                console.log("Completed Registartion!!!")
            }
        }
        catch (err) {
            res.status(500).send({
                message: 'Error Occured ' + err
            });
        }
        finally {
            await client.close();
        }
        res.json(createTenant);

    }
}

module.exports = tenantService