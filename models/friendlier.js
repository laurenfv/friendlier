// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var acts = {
  all: function(cb) {
    orm.selectAll("random_acts", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.insertOne("random_acts", name, cb);
  },
  update: function(d, cb) {
    orm.updateOne("random_acts", id, cb);
    }
  }
//   ,
//   delete: function(condition, cb) {
//     orm.delete("random_acts", condition, function(res) {
//       cb(res);
//     });
//   }
};

// Export the database functions for the controller (catsController.js).
module.exports = acts;
