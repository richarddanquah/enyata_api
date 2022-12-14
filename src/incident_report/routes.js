const { Router } = require('express');
const controller = require("./controller");

const router = Router();

router.get('/', controller.getIncidentReport);
router.post('/', controller.addIncidentReport);


module.exports = router; 