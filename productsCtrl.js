var app = require('./index');
var db = app.get('db');

module.exports = {

    // Requires a Post call from client with JSON CONTENT AS FOLLOWS:
    // {
    //     "name" : "Door",
    //     "description" : "A door for the back porch",
    //     "price" : 374,
    //     "imageurl" : "http://dkjdlkasjflkjasdlfj.com"
    // }
    // ALSO MAKE SURE THE Header and text FORMAT IS set to "application/json"
    //  Sample  localhost:3000/api/products/
    Create : function(req,res, next){
        db.create_product ([req.body.name,req.body.description,req.body.price, req.body.imageurl], function(err, products){
            console.log(err, products);
            res.send(JSON.stringify(products));
        });
    },


    // Requires a GET call from client with NO BODY (NO JSON) CONTENT AS FOLLOWS:
    // Note GET calls do not send boddy content
    // ALSO MAKE SURE THE Header IS set to "application/json"
    //  SAMPLE localhost:3000/api/products/
    GetAll : function(req,res, next){
        db.read_products (function(err, products){
            console.log(err, products);
            res.send(JSON.stringify(products));
        });
    },

    // Requires a GET call from client with NO BODY (NO JSON) CONTENT AS FOLLOWS:
    // Note GET calls do not send boddy content
    // ALSO MAKE SURE THE Header IS set to "application/json"
    // SAMPLE     localhost:3000/api/product/5  (Note that product is not plural
    //                                        and 5 is the id of wanted record)
    GetOne : function(req, res, next){
        db.read_product ([req.params.id], function(err, products){
            console.log(err, products);
            res.send(JSON.stringify(products));
        });
    },

    // Updates the description of specific record.  (the ID number is in the URL)
    // Requires a Put call from client with JSON body AS FOLLOWS:
    // {
    //     "description" : "A door for the back porch"
    // }
    // ALSO MAKE SURE THE Header and text FORMAT IS set to "application/json"
    //  Sample  localhost:3000/api/product/5  (Note that product is not plural
    //                                        and 5 is the id of wanted record)
    Update : function(req,res, next){
        db.update_product ( [req.params.id, req.body.description], function(err, products){
            console.log(err, products);
            res.send(JSON.stringify(products));
      });
    },

    // Requires a DELETE call from client with NO BODY (NO JSON) CONTENT AS FOLLOWS:
    // ID IS INCLUDED IN URL
    // ALSO MAKE SURE THE Header IS set to "application/json"
    // SAMPLE     localhost:3000/api/product/5  (Note that product is not plural
    //                                        and 5 is the id of wanted record)

    Delete : function(req,res, next){
        db.delete_product ([req.params.id], function(err, products){
            console.log(err, products);
            res.send(JSON.stringify(products));
        });
    }

}
