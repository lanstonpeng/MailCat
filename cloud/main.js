require("cloud/app.js");
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.initialize("tkb80z5s7ezqq8et6fd26s6y6jz3u7eopgg5bboypom7ojk2", "s4784nd8ucpcp2083fgf2b246okzzy34agbghhf5zk2hee15");
AV.Cloud.define("hello", function(request, response) {
  response.success("sup man");
});

AV.Cloud.define("averageStars", function(request, response) {
  var query = new AV.Query("TestObject");
  query.find({
    success: function(results) {
      response.success(results);
    },
    error: function() {
      response.error("movie lookup failed");
    }
  });
});

