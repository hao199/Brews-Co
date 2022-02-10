var jsondata = {"field1": "xyz","field2": "abc"};
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
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

$("#signup-btn").click(function(){
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();

    $.post("https://brewco-662a.restdb.io/rest/account",{
        username:username,
        email:email,
        password:password
    },function(response){
        $("#response").html("<div class='alert alert-success'>"+response.message+"</div>")
        clearField();
    })
})

function clearField(){
    $("#username").val("");
    $("#email").val("");
    $("#password").val("");

}