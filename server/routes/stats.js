var express = require('express');
var router = express.Router();
const buyProduct = require("../controller/states/openStatsTable");
const openOrderDetails = require('../controller/states/openOrderDetails');
const getTopSoldProduct = require('../controller/states/getTopSoldProducts');
const getTopUnique = require("../controller/states/getTopUnique");
const dayCell = require('../controller/states/getDayleCells')

/* GET users listing. */
router.get('/',getTopSoldProduct.getTopSoldProducts,getTopUnique.getTopUnique,dayCell.getDayleCells,  function(req, res, next) {
  try{
 
   
   res.json({msg:'success',topSells:req.topSells,topUnique:req.topUnique,day:req.dayCell})

  }catch(e){
    res.json({err:e.message})

  }

  
 
 

});

router.post('/',buyProduct.openStatsTable,openOrderDetails.openOrderDetails, function(req, res, next) {
  
  });


module.exports = router;
