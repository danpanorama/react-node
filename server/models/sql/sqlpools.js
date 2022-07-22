const pool = require("./mysql");

const getAllProducts = () => {
  return pool.execute(`SELECT * FROM products `);
};




const deleteProduct = (id) => {
  return pool.execute(
    `DELETE  FROM products WHERE id = ? `,
    [id]
  );
};


const selectProduct = (id) => {
  return pool.execute(
    `SELECT * FROM products WHERE id = ? `,
    [id]
  );
};


const getTopSoldProduct = () => {
  return pool.execute(
    `SELECT productid ,productname, SUM(amount) AS TotalQuantity
    FROM orderdetails
    GROUP BY productid
    ORDER BY SUM(amount) DESC
    LIMIT 5 `,
    
  );
};

const getTotalCellBaseDay = () => {
  return pool.execute(
    `SELECT    DATE_FORMAT(date, '%Y-%m-%d') as DATE, SUM(totalprice) totalCount
    FROM      orders
    GROUP BY  DATE(date)
    LIMIT 5 `,
    
  );
};







const getUniqueSell = () => {
  return pool.execute(
    `SELECT orderid , productname, SUM(amount) AS TotalQuantity
    FROM orderdetails
    GROUP BY orderid
    ORDER BY SUM(amount) DESC
    LIMIT 5`,
    
  );
};











 

const insertNewProduct = 
(title,price, description, img   ) => {
  return pool.execute(
    `INSERT INTO products 
    (title,price, description, img ) 
    VALUES 
    (?, ?, ?, ?)`,
    [title,price, description, img]
  );
};



const updateProduct = (title,price, description, img,id ) => {
  return pool.execute(
    `UPDATE products 
    SET title = ?,
    price =?,
    description =?,
    img=?
    WHERE id = ? `,
    [title,price, description, img,id ]
  );
};








// order table

const insertNewOrder = 
(date, totalprice ) => {
  return pool.execute(
    `INSERT INTO orders
    (date,totalprice) 
    VALUES 
    (?, ?)`,
    [date,totalprice]
  );
};


const insertNewOrderDetails = 
(orderid,productid,amount,priceforone,totalprice,productname ) => {
  return pool.execute(
    `INSERT INTO orderdetails 
    (orderid,productid,amount,priceforone,totalprice,productname) 
    VALUES 
    (?, ?,?, ?,?,?)`,
    [orderid,productid,amount,priceforone,totalprice,productname]
  );
};




module.exports.getAllProducts = getAllProducts;
module.exports.updateProduct = updateProduct;
module.exports.insertNewProduct = insertNewProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.selectProduct = selectProduct;
module.exports.insertNewOrder = insertNewOrder;
module.exports.insertNewOrderDetails = insertNewOrderDetails;

module.exports.getTopSoldProduct = getTopSoldProduct;
module.exports.getUniqueSell = getUniqueSell;


module.exports.getTotalCellBaseDay = getTotalCellBaseDay;


