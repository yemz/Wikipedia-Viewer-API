$(document).ready(function(){
  //Run code to display results after search button is clicked
  $("#searchBtn").click(function(){
   //Gets search input
    var searchBox = $("#searchBox").val();
   //API URL with searchBox
   var apiurl ="https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchBox + "&format=json&callback=?";

  //Get ajax
  $.ajax({
    type:"GET",
    url: apiurl,
    async: false,
    dataType: "json",
    success: function(data){
      console.log(data);
      //Get heading
      console.log(data[1][0]);
      //Get description
      console.log(data[2][0]);  
      //Get links
      console.log(data[3][0]);
      
      
     //Delete content of "#result" after each search
     $("#result").html("");

      //$("#result").prepend(data[1][0]);
         //for loop to display the result by heading, description and links
     for(var i = 0; i < data[1].length; i++){
       $("#result").prepend("<li> <a href = "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
     }
        //Empty search box after each search
      $("#searchBox").val("");
    },
    error: function(errorMessage){
      alert("Error");
    }

 });
  }); //End search button
  
    //Enable keyboard Enter key
    $("#searchBox").keypress(function(e){
       if(e.which == 13){
         $("#searchBtn").click();
     }
  });

});