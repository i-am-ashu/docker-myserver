const express = require("express")
const mysql = require("../db")

var router = express();
var connection = mysql.connect();

router.get("/",(request,response)=>
{
    stmt = "select * from product";
    const result = {};
    connection.query(stmt,(error,data)=>
    {
        if( error )
        {
            result['status'] = 'error';
            result['error'] = error;
        }
        else{
            result['status'] = 'success';
            result['data'] = data;
        }
        response.send(result);
    })
})

module.exports = router;
