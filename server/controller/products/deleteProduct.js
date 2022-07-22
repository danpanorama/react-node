
const sqlTable = require('./../../models/sql/sqlpools')

// this is logg in function
const deleteProduct = async (req, res, next) => {
    try{
        console.log(req.body)

        await sqlTable.deleteProduct(req.body.id);
        res.json({msg:"success deleting product"})
      


    }catch(e){
        res.json({err:e}).status(500)
    }

};


module.exports.deleteProduct = deleteProduct;
