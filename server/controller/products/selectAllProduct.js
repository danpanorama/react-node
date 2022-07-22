
const sqlTable = require('./../../models/sql/sqlpools')

const selectAll = async (req,res,next) => {
    try{

   let products =   await sqlTable.getAllProducts();

   res.json({data:products[0]})
        


    }catch(e){
       res.json({err:e})
       
    }

};


module.exports.selectAll = selectAll;
