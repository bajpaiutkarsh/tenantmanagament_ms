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
            const {id, name,startDate,endDate,startMeterReading,endMeterReading,lastBillDate,lastPaidDate,pendingAmount } = req.body
            var newTenant = new Tenant(id, name,startDate,endDate,startMeterReading,endMeterReading,lastBillDate,lastPaidDate,pendingAmount );
            
        }
        catch (err) {
            res.status(500).send({
                message: 'Error Occured ' + err
            });
        }
        finally {
            await client.close();
        }
        res.json(newTenant);

    }
}

module.exports = tenantService