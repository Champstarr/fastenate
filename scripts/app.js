$(document).ready(function(){

  function viewBlogposts(){}


  function viewStudents(){}


  $("#blogs").on("click", function(){
    // alert("Aloha");
     $.ajax({
        type: "GET",
        url: "https://api.mongolab.com/api/1/databases/devleague_jquery/collections/blog_posts",
        contentType: "application/json",
        data: {
          // Query string data from the url goes here (the part after the question mark ? in a url)
          "apiKey": "QMnw2qjgl4l0LDx3RbN2NRlMEu_vCipC"
        },
        success: function(response) {
          console.log(response); // See what it prints out
          // Call the appropriate function here, viewBlogPosts or viewStudents
        },
        error: function(request, errorType, errorMessage) {
          console.log("ERROR: " + errorMessage);
        }
      });
  });

  $("#students").on("click", function(){
    // alert("Mahalo");

    $.ajax({
      type: "GET",
      url: "https://api.mongolab.com/api/1/databases/devleague_jquery/collections/students",
      contentType: "application/json",
      data: {
        // Query string data from the url goes here (the part after the question mark ? in a url)
        "apiKey": "QMnw2qjgl4l0LDx3RbN2NRlMEu_vCipC"
      },
      success: function(response) {
        console.log(response); // See what it prints out
        // Call the appropriate function here, viewBlogPosts or viewStudents
      },
      error: function(request, errorType, errorMessage) {
        console.log("ERROR: " + errorMessage);
      }
    });
  });

});

