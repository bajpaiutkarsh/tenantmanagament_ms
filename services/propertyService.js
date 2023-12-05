const { MongoClient, ObjectId } = require('mongodb');
const env = require("../environment");
const Property = require('../model/Property');
class propertyService{
    static async postProperty(req, res){
        console.log("Registering Property... ");
        const client = new MongoClient(env.URI);
        console.log("hello1")
        try{
            const {id, name, address, chargePerUnit } = req.body
            console.log("hellow")
            var newProperty = new Property(id, name,address,chargePerUnit );
            console.log("hello")
            console.log(newProperty);
            var createProperty = await client.db(env.DB).collection(env.PROPERTYMANAGEMENT).insertOne(newProperty);
            if(createProperty){
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
        res.json(createProperty);
    }

    static async getAllProperty(req, res){
        console.log("Get All Property... ");
        const client = new MongoClient(env.URI);
        try{
            var properties = await client.db(env.DB).collection(env.PROPERTYMANAGEMENT).find().toArray();
            if(properties){
                console.log("Completed Get property!!!")
                res.send(properties)
            }
            else{
            res.send([]);
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
        
    }
}
module.exports = propertyService