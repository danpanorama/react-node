const sqlTable = require('./../../models/sql/sqlpools')


const getTopSoldProducts = async (req, res, next) => {
    try{
  
 let top5 =await sqlTable.getTopSoldProduct()  

req.topSells = top5[0];
next()
// res.json({msg:'succses',data:top5[0]})
      
      



    }catch(e){
        res.json({err:e})
    }

};


module.exports.getTopSoldProducts = getTopSoldProducts;
