//Get User Title and progress to next title
var title = '';
var nextTitle = '';
var expAway = 0;
var percentage = 0;
var userExp = localStorage.getItem('experience');
function checkUserTitle(){
    if(userExp < 150){
        title = 'CoffeeCub'
        nextTitle = 'Caffeine Lover'
        expAway = 150 - userExp
        percentage = userExp / 150 * 100
        percentage = 'width:' + percentage + '%'
        document.getElementsByClassName("progress-bar")[0].setAttribute("style", percentage);
        return title,expAway,nextTitle;
    }
    else if(userExp >= 150 && userExp < 300){
        title = 'Caffeine Lover'
        nextTitle = 'Caffeholic'
        expAway = 300 - userExp
        percentage = (userExp - 150) / 150 * 100 
        percentage = 'width:' + percentage + '%'
        document.getElementsByClassName("progress-bar")[0].setAttribute("style", percentage);
        return title,expAway,nextTitle;
    }
    else{
        title = 'Caffeholic'
        nextTitle = "Completed"
        document.getElementsByClassName("progress-bar")[0].setAttribute("style", "width:100%");
        return title,nextTitle;
    } 
}

//Display User Title and progress
checkUserTitle();
var profileTitle = document.getElementById('profile-title');
profileTitle.textContent = title;

var profileXp = document.getElementById('profile-xp');
profileXp.textContent = 'Total XP: ' +userExp;

if(nextTitle == 'Completed'){
    var profileProgress = document.getElementById('profile-progress');
    profileProgress.textContent = "Congratulations! You have reached the highest rank!"
}
else{
    var profileProgress = document.getElementById('profile-progress');
    profileProgress.textContent = "You're " + expAway + ' xp towards ' + nextTitle;
}




//Get UserName and Display
var userName = localStorage.getItem('username');
var profileUser = document.getElementById('profile-user');
profileUser.textContent = 'Welcome, ' + userName

//Get UserBeans and Display
var userBeans = localStorage.getItem('beans');
var profileBeans = document.getElementById('profile-beans');
profileBeans.textContent = userBeans + ' CoffeeBeans';


//Check if 2dollar off is redeemable
function redeemReward1(){
    if(userBeans >= 50){
        userBeans = userBeans - 50
        localStorage.setItem('reward1', 1);
        localStorage.setItem('beans', userBeans);
        alert.textContent = 'Redeem Succesful.'
        document.getElementsByClassName("redeem-response")[0].setAttribute("class", 'alert alert-success text-center');
        document.getElementsByClassName("redeem-response")[0].setAttribute("role", 'alert');
    }
    else{
        alert.textContent = 'Not enough coffee beans.'
        document.getElementsByClassName("redeem-response")[0].setAttribute("class", 'alert alert-danger text-center');
        document.getElementsByClassName("redeem-response")[0].setAttribute("role", 'alert');
    }  
}

//Check if 5dollar off is redeemable
function redeemReward2(){
    if(userBeans >= 150){
        userBeans = userBeans - 150
        localStorage.setItem('reward2', 1);
        localStorage.setItem('beans', userBeans);
        alert.textContent = 'Redeem Succesful.'
        document.getElementsByClassName("redeem-response")[0].setAttribute("class", 'alert alert-success text-center');
        document.getElementsByClassName("redeem-response")[0].setAttribute("role", 'alert');
    }
    else{
        alert.textContent = 'Not enough coffee beans.'
        document.getElementsByClassName("redeem-response")[0].setAttribute("class", 'alert alert-danger text-center');
        document.getElementsByClassName("redeem-response")[0].setAttribute("role", 'alert');
    }  
}

//Check if Free Coffee Bag is redeemable
function redeemReward3(){
    if(userBeans >= 300){
        userBeans = userBeans - 300
        localStorage.setItem('reward3', 1);
        localStorage.setItem('beans', userBeans);
        alert.textContent = 'Redeem Succesful.'
        document.getElementsByClassName("redeem-response")[0].setAttribute("class", 'alert alert-success text-center');
        document.getElementsByClassName("redeem-response")[0].setAttribute("role", 'alert');
    }
    else{
        alert.textContent = 'Not enough coffee beans.'
        document.getElementsByClassName("redeem-response")[0].setAttribute("class", 'alert alert-danger text-center');
        document.getElementsByClassName("redeem-response")[0].setAttribute("role", 'alert');
    }  
}


//Check if 2 Free Coffee Bag is redeemable
function redeemReward4(){
    if(userBeans >= 500){
        userBeans = userBeans - 500
        localStorage.setItem('reward4', 1);
        localStorage.setItem('beans', userBeans);
        alert.textContent = 'Redeem Succesful.'
        document.getElementsByClassName("redeem-response")[0].setAttribute("class", 'alert alert-success text-center');
        document.getElementsByClassName("redeem-response")[0].setAttribute("role", 'alert');
    }
    else{
        alert.textContent = 'Not enough coffee beans.'
        document.getElementsByClassName("redeem-response")[0].setAttribute("class", 'alert alert-danger text-center');
        document.getElementsByClassName("redeem-response")[0].setAttribute("role", 'alert');
    }  
}






//Redeem
var alert = document.getElementById("redeem-response")

var button = document.getElementById('redeem-1')
button.addEventListener('click', redeemReward1)

var button = document.getElementById('redeem-2')
button.addEventListener('click', redeemReward2)

var button = document.getElementById('redeem-3')
button.addEventListener('click', redeemReward3)

var button = document.getElementById('redeem-4')
button.addEventListener('click', redeemReward4)







