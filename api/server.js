var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");

var db = mongo.connect("mongodb://localhost:27017/HouseBase", function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to ' + db, ' + ', response);
    }
});


var app = express()
app.use(bodyParser());
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '5mb'
}));


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var Schema = mongo.Schema;

var UsersSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
}, {
    versionKey: false
});



/* 
app.post("/api/SaveUser",function(req,res){   
 var mod = new model(req.body);  
 if(req.body.mode =="Save")  
 {  
    mod.save(function(err,data){  
      if(err){  
         res.send(err);                
      }  
      else{        
          res.send({data:"Record has been Inserted..!!"});  
      }  
 });  
}  
else   
{  
 model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address},  
   function(err,data) {  
   if (err) {  
   res.send(err);         
   }  
   else{        
          res.send({data:"Record has been Updated..!!"});  
     }  
 });  
  
  
}  
 })  
  
 app.post("/api/deleteUser",function(req,res){      
    model.remove({ _id: req.body.id }, function(err) {    
     if(err){    
         res.send(err);    
     }    
     else{      
            res.send({data:"Record has been Deleted..!!"});               
        }    
 });    
   })  
  
  */

app.get("/api/getCreditGrowth", function(req, res) {
    var model = mongo.model('CreditGrowth', UsersSchema, 'CreditGrowth');
    model.find({}, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})
app.get("/api/getGlobalHousePrice", function(req, res) {
    var model = mongo.model('GlobalHousePriceIndex', UsersSchema, 'GlobalHousePriceIndex');
    model.find({}, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})

app.get("/api/getPriceToincome", function(req, res) {
    var model = mongo.model('pricetoincome', UsersSchema, 'pricetoincome');
    model.find({}, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})
app.get("/api/getFHFA", function(req, res) {
    var model = mongo.model('FHFA', UsersSchema, 'FHFA');
    model.find({}, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})
app.get("/api/getHousePricesAroundtheWorld", function(req, res) {
    var model = mongo.model('HousePricesAroundtheWorld', UsersSchema, 'HousePricesAroundtheWorld');
    model.find({}, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})

app.get("/api/getHousePricesCountYear", function(req, res) {
    var model = mongo.model('houce_country_year', UsersSchema, 'houce_country_year');
    model.find({}, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})

app.listen(8080, function() {

    console.log('api is listening on port 8080')
})