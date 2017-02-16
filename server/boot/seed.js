'use strict';

module.exports = function(server) {
  var db = server.datasources.postgres
  db.automigrate()
};
