function checkuserlogin(){
    var currentUser = localStorage.getItem('username')
    if(currentUser == null){
      window.location.href = '/dist/login.html';
    }
    else{
      window.location.href = '/dist/shop.html';
    }
  }

var button = document.getElementById('profile')
button.addEventListener('click', checkuserlogin)