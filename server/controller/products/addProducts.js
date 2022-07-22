
const sqlTable = require('./../../models/sql/sqlpools')


// this is logg in function
const add = async (req, res, next) => {
    try{

 
        console.log( req.body)
      
         let x = await sqlTable.insertNewProduct(
                req.body.title,
                req.body.price,
                req.body.description,
                req.body.img
            );
            console.log( x[0].insertId)

            let product = await sqlTable.selectProduct(x[0].insertId);
            console.log( product[0])
            res.json({msg:"success adding new product",data:product[0][0]})
      

    }catch(e){
        res.json({error:e.message}).status(500)
            
    }

       


 

};


module.exports.add = add;
