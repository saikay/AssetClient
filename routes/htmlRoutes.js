module.exports = function(app,db){
   
    app.get("/",function(req,res){
        db.Assets.find({}).then(function(dbArticle){
            var dbObject= {asset: dbArticle};
            res.render("index",dbObject);
        });
        
    });
    
    app.get("/addCompany",function(req,res){
        res.render("addCompanyForm");
    });

    app.get("/editCompany/:id",function(req,res){
        db.Assets.find({_id:req.params.id}).then(function(dbAsset){
            res.render("editCompanyForm",dbAsset[0]);
        });
    })

    app.post("/editCompany/",function(req,res){
        db.Assets.updateOne({_id:req.body._id},{$set:{company:req.body.company,note:req.body.note}}).then(function(dbAsset){
            db.Assets.find({}).then(function(dbArticle){
                var dbObject= {asset: dbArticle};
                res.render("index",dbObject);
            });
        });
    });

    app.post("/addCompany",function(req,res){
        console.log("Add company");
         db.Assets.create({company:req.body.company,
                            note: req.body.note})
         .then(function(dbAsset) {
            db.Assets.find({}).then(function(dbAsset){
                var dbObject= {asset: dbAsset};
                res.render("index",dbObject);
            });
         })
         .catch(function(err) {
            console.log(err);
         });
     });

    app.get("/company/:id",function(req,res){
        db.Assets.find({_id:req.params.id}).then(function(dbAsset){
            res.render("companyDetail",dbAsset[0]);
        })
    });

    app.get("/deleteCompany/:id",function(req,res){
        db.Assets.remove({_id:req.params.id}).then(function(result){
                res.json(result);
        });
    })
}
