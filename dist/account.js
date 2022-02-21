
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

//Post
$("#signup-btn").click(function(){
  console.log('we here');
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var beans = 0
    var account = {"username": username,"email": email,"password": password,"beans": beans};
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

//Get
$("#login-btn").click(function(){
  var username = $("#username").val();
  var password = $("#password").val();
  console.log(username);
  console.log(password);
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://brewco-662a.restdb.io/rest/account",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "62057be51b941c73ff397a58",
      "cache-control": "no-cache"
    }
  }
  $.ajax(settings).done(function (response) {
    // console.log("yes");
    // console.log(response);
    // console.log(response.length);
    var logstatus = false;
    for (var i=0; i<response.length ; i++){
      var checkuser = response[i].username;
      var checkpass = response[i].password;
      // console.log(checkuser);
      // console.log(checkpass);
      if (checkuser === username && checkpass === password){
        $("#response").html("<div class='alert alert-success'>Log In Successful</div>");
        clearField();
        logstatus = true;
        var email = response[i].email;
        var beans = response[i].beans;

        // Store data
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('beans', beans);
        window.location.href = '/dist/shop.html';
        return;
      }
      if (logstatus == false){
        $("#response").html("<div class='alert alert-success'>Try again</div>");
        clearField();
      }
    }
    //console.log('hi')
  });
})
