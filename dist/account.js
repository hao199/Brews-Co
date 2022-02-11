
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

//Post
$("#signup-btn").click(function(){
  console.log('we here');
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var account = {"username": username,"email": email,"password": password};
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://brewco-662a.restdb.io/rest/account",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "62057be51b941c73ff397a58",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(account)
    }

    $.ajax(settings).done(function (response) {
      $("#response").html("<div class='alert alert-success'>Account successfully created</div>");
      clearField();
    });

    // $.done("https://brewco-662a.restdb.io/rest/account",{
    //     username:username,
    //     email:email,
    //     password:password
    // },function(response){
    //     $("#response").html("<div class='alert alert-success'>"+response.message+"</div>")
    //     clearField();
    // })
})

function clearField(){
    $("#username").val("");
    $("#email").val("");
    $("#password").val("");

}