const sqlTable = require('./../../models/sql/sqlpools')


const getDayleCells = async (req, res, next) => {
    try{
  
 let daycell =await sqlTable.getTotalCellBaseDay()  


req.dayCell = daycell[0];
next()
// res.json({msg:'succses',data:top5[0]})
      
      



    }catch(e){
        res.json({err:e})
    }

};


module.exports.getDayleCells = getDayleCells;
