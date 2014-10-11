require("cloud/app.js");
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
//
AV.Cloud.define("hello", function(request, response) {
  response.success("sup man");
});

AV.Cloud.define("averageStars", function(request, response) {
  var query = new AV.Query("TestObject");
  query.find({
    success: function(results) {
      response.success(results.length);
    },
    error: function() {
      response.error("movie lookup failed");
    }
  });
});

