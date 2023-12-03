 class ENVIRONMENT{
    static MODE = "dev"
    static env = process.env;
    static URI = "mongodb+srv://ukencaph:ukencaph@enbits.4gilqgs.mongodb.net/?retryWrites=true&w=majority";
    static DB = 'propertyManagement';
    static TENANTMANAGEMENT = 'tenantManagement';

}
module.exports = ENVIRONMENT;