var orm = require('../db/orm.js');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.argv[2],
    database: 'topNotchdb'
});
// Delete customer from database
var ormdb = {
    deleteCust: function(userId, Id) {
        var queryString = 'DELETE FROM jobs WHERE id = ' + userId; 
        console.log('query selectOne: '+ queryString);
        connection.query(queryString, function(err, res) {
            return res;
            // cb(res);
            
        });
    },
//  Select all customers from database 
    selectAll: function(userId) {
        var queryString = 'SELECT * FROM jobs WHERE userId = ' + userId; 
        console.log('query selectAll: '+ queryString);
        connection.query(queryString, function(err, res) {
            return res;
            // cb(res);
        });
    },

// Insert New customer into database
    insertCust: function(userId, CustNumb, CustName, CustAdd, CustMat, SinkDet, EdgeDet, SQFT, callback) {
        console.log('userId: ' + userId);
        
        var queryString = 'INSERT INTO jobs(userId, jobNumb, jobName, jobAddress, jobMaterial, jobSink, jobEdge, jobSqft) VALUES (?,?,?,?,?,?,?,?)';
        
        console.log('query insert: '+ queryString);
        

        connection.query(queryString, [userId, CustNumb, CustName, CustAdd, CustMat, SinkDet, EdgeDet, SQFT], function(err, res) { 
            if (err) {
                console.log(err) 
                return callback(false, err)
            }
            
            console.log('response:', res)
            callback(true,null)
           // callback(res);
        });
    }
// Insert New customer into database
    // insertCustTemplate: function(userId, JobNumb, JobImage, callback) {
    //     // localStorage.getItem('drawing');
    //     console.log('userId: ' + userId);
    //     var imageString = "slfjkslalslkkkkknnnnsjnfnjslnflsnfm,m,m,n,nmsfdf";
    //     var queryString = 'INSERT INTO jobs(userId, JobNumb, jobImage) VALUES (?, 110, imageString)';
        
    //     console.log('query insert: '+ queryString);
        

    //     connection.query(queryString, [userId, 110, imagestring ], function(err, res) { 
    //         if (err) {
    //             console.log(err) 
    //             return callback(false, err)
    //         }
            
    //         console.log('response:', res)
    //         callback(true,null)
    //        // callback(res);


    //     });
    // }





}


            //res.redirect('/verify');
            // (res);
             // cb(res);
            //return res;
           

        // });
  

// Insert the template JSON string
    // insertTempJSON: function(userId, jobImage) {
    //     console.log ('userId: ' + userId);
    //     var queryString = 'INSERT INTO jobs(userId, jobImage) VALUES (?,?)';
        
    //     console.log('query insert: '+ queryString);
    //     connection.query(queryString, [userId, custTemp], function(err, res) { 
    //         //res.redirect('/verify');
    //         // (res);
    //          // cb(res);
    //         // return res;
           

    //     });
    // },
// };
    // openTemplateJSON: function(userId, jobImage) {
    //     console.log('userId: ' + userId);
    //     var queryString = 'INSERT INTO jobs(userId, jobName, jobAddress, jobMaterial, jobSink, jobEdge, jobSqft) VALUES (?,?,?,?,?,?,?)';
        
    //     console.log('query insert: '+ queryString);
    //     connection.query(queryString, [userId,jobName, jobAddress, jobMaterial, jobSink, jobEdge, jobSqft], function(err, res) { 
    //         //res.redirect('/verify');
    //         // (res);
    //          // cb(res);
    //         return res;
           

    //     });
    // },
    


module.exports = ormdb;



// connection examples

// app.get('/', function(req, res) {
//     connection.query('SELECT * FROM schools', function(err, result) {

//       var html = '<h1> Magical Schools </h1>';

//       html += '<ul>'

//       // Use the data from the database to populate an HTML file
//       for (var i = 0; i < result.length; i++) {
//         html += '<li><p> ID: ' + result[i].id + '</p>';
//         html += '<p>School: ' + result[i].name + ' </p></li>';
//       };

//       html += '</ul>'

//       // Send the html to the browser
//       res.send(html);
//   });
// });
