const express = require("express")
const router = express.Router();
const tenant = require("./services/tenantService")

router.get('/tenants', tenant.getTenants)
router.post('/tenant', tenant.postTenant)
module.exports = router;