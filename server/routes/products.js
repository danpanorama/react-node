var express = require('express');
var router = express.Router();
const addProducts = require('../controller/products/addProducts');
const updateProduct = require('../controller/products/updateProduct');
const selectAllProducts = require("../controller/products/selectAllProduct");
const deleteProduct = require("../controller/products/deleteProduct")



router.get('/',selectAllProducts.selectAll, function(req, res, next) {});


router.post('/add',addProducts.add, function(req, res, next) {

    res.json({msg:'inseret seccsest'});
  });

  router.post('/edit',updateProduct.updateProduct, function(req, res, next) {
  });

  router.post('/delete',deleteProduct.deleteProduct, function(req, res, next) {
    
  });

module.exports = router;
