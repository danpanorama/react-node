const sqlTable = require('./../../models/sql/sqlpools')


const getTopUnique = async (req, res, next) => {
    try{
  
 let top5 =await sqlTable.getUniqueSell()  


req.topUnique = top5[0];
next()
// res.json({msg:'succses',data:top5[0]})
      
      

    }catch(e){
        res.json({err:e})
    }

};


module.exports.getTopUnique = getTopUnique;
