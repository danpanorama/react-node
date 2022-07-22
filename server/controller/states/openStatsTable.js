
const sqlTable = require('./../../models/sql/sqlpools')


const openStatsTable = async (req, res, next) => {
    try{
        
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        let date = new Date(today)
        console.log('here', data,"  ", req.body.total)

       let result = await sqlTable.insertNewOrder(date,req.body.total);
            
    
     req.id = result[0].insertId

        next()
      


    }catch(e){
      
        res.json({err:e})
    }

};


module.exports.openStatsTable = openStatsTable;
