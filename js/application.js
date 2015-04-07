$(document).ready(function(){
  console.log("linked");

  function newPost(user,title,text){

    $.ajax({
      type: 'POST',
      url: 'http://ga-wdi-api.meteor.com/api/posts/',
      data: {
          user: user,
          title: title,
          text: text
      },
      dataType: 'json',
      success: function(response){
          console.log(response);
        }
    });
  }

  $(document).on('click','#submit', function(){
    var user  = $('.user_input').val();
    var title = $('.title_input').val();
    var text  = $('.text_input').val();
    newPost(user,title,text);
    console.log("clicked")
  })

  function get(){
    $.ajax({
      type: 'GET',
      url: 'http://ga-wdi-api.meteor.com/api/posts/',
      dataType: 'json',
      success: function(response){
        console.log(response);

        for(var i=0; i<response.length; i++) {
          console.log(response[i]["title"]);

          var ID = response[i]["_id"];
          var user = response[i]["user"];
          var title = response[i]["title"];
          var text = response[i]["text"];
          var button = "<button class='delete-btn btn btn-danger'> DELETE</button>";


          $(".content").append("<tr>" +
            "<td class='id'>" + ID +  "</td>" +
            "<td>" + title + "</td>" +
            "<td>" + text + "</td>" +
            "<td>" + user + "</td>" +
            "<td>" + button + "</td>" +
          "</tr>");

          console.log("<tr>" +
            "<td>" + ID +  "</td>" +
            "<td>" + title + "</td>" +
            "<td>" + text + "</td>" +
            "<td>" + user + "</td>" +
            "<td>" + button + "</td>" +
          "</tr>");
        }
      }
    })
  };

  $(document).on('click','#get', function(){
    
    get();
    console.log('got')
  })


  $(document).on('click','.delete-btn', function(){
    var id = $(this).parent().siblings(".id").text()
    console.log(id);
   $.ajax({
      type: 'DELETE',
      url: 'http://ga-wdi-api.meteor.com/api/posts/'+id,
      success: function(response){
          console.log(response);
          
      } 
    });
  });

  
 

});


