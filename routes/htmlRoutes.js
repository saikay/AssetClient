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

    app.post("/addCompany",function(req,res){
        console.log("Add company");
         db.Assets.create({company:req.body.company,
                            note: req.body.note})
         .then(function(dbAsset) {
            db.Assets.find({}).then(function(dbArticle){
                var dbObject= {asset: dbArticle};
                res.render("index",dbObject);
            });
         })
         .catch(function(err) {
            console.log(err);
         });
     });

    app.get("/addNoteForm/:id",function(req,res){
        var id = {id:req.params.id};
        res.render("addNoteForm",id);
        
    });

}
