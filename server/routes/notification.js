const router = require("express").Router();
const { notifyControl } = require("../controllers/notification");

const notifyRoute = router.post("/api/v1/notification", notifyControl);

module.exports = notifyRoute;
