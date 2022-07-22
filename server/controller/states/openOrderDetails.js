const sqlTable = require('./../../models/sql/sqlpools')


const openOrderDetails = async (req, res, next) => {
    try{
  

let array = req.body.data;

for(let i = 0; i< array.length; i++){

    console.log((array[i].price * array[i].amount))
    await sqlTable.insertNewOrderDetails(req.id,array[i].id,array[i].amount,array[i].price,(array[i].price * array[i].amount),array[i].title);  
    
}
res.json({msg:'succses'})
      
      
      


    }catch(e){
      
        res.json({err:e})
    }

};


module.exports.openOrderDetails = openOrderDetails;
