
const sqlTable = require('./../../models/sql/sqlpools')


// this is reusible function
const add = async (data) => {
    try{
        await sqlTable.insertNewProduct( data  );
        return

    }catch(e){
            throw e
    }

       


 

};


module.exports.add = add;
