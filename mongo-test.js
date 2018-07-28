var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("tendermintdb");
  //Find the first document in the customers collection:
  dbo.collection("validators").aggregate([
      {
         $project: {
            name: 1,
            votes: { $size: "$votes" }
         }
      },
      {
          $sort:
            {votes : -1}
      }
   ]).toArray(function(err, result) {
    if (err) throw err;
    console.log(result.name);
    console.log(result);
    db.close();
  });
  // dbo.collection("validators").find({}).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result.name);
  //   console.log(result);
  //   db.close();
  // });
});
