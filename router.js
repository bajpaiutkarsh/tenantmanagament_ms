const express = require("express")
const router = express.Router();
const tenant = require("./services/tenantService");
const propertyService = require("./services/propertyService");

router.get('/tenants', tenant.getTenants)
router.post('/tenant', tenant.postTenant)
router.post("/property",propertyService.postProperty)
router.get("/property",propertyService.getAllProperty)
module.exports = router;