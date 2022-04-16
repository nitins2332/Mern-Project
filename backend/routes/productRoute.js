const express = require("express");
const { getAppProduct } = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAppProduct);

module.exports = router;
