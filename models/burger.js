//const orm = require("../config/orm.js");

// An object that is exported to burgers-controller,js
//calling the functions from the orm.js file
/*
var burgerORM = {
  	selectAll: function(response){
  		orm.selectAll(function(data){
  			response(data);
  		});
  	},
    insertOne: function(burger_name, response){
      orm.insertOne(burger_name, function(data){
        response(data);
      });
    },
    updateOne: function(id, response){
      orm.updateOne(id, function(data){
        response(data);
      });
    },
    deleteOne: function(id, response){
      orm.deleteOne(id, function(data){
        response(data);
      });
    }
}


module.exports = burgerORM;
*/
module.exports = function(sequelize, DataTypes) {
  var Burgers= sequelize.define("Burgers", {
      burger_name: {
          type: DataTypes.STRING,
          allowNull: false,

      },
      devoured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
  });
  return Burgers;
};
