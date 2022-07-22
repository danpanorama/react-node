
const sqlTable = require('./../../models/sql/sqlpools')

// this is logg in function
const updateProduct = async (req, res, next) => {
    try{
let data = req.body
console.log(data)
if(!req.body.id){ 
   res.json({error:"error ni id o product",msg:"error"}).status('500')
}else{
   
        await sqlTable.updateProduct(data.title,data.price, data.description,data.img,data.id);
        console.log("data")
        res.json({msg:'update success'})
       
}

    }catch(e){
        res.json({error:e})
    }

};


module.exports.updateProduct = updateProduct;
