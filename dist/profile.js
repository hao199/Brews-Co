//Get User Title and progress to next title
var title = '';
var nextTitle = '';
var expAway = 0;
var userExp = localStorage.getItem('experience');
function checkUserTitle(){
    if(userExp < 150){
        title = 'CoffeeCub'
        nextTitle = 'Caffeine Lover'
        expAway = 150 - userExp
        return title,expAway,nextTitle;
    }
    else if(userExp > 150 && userExp < 300){
        title = 'Caffeine Lover'
        nextTitle = 'Caffeholic'
        expAway = 300 - userExp
        return title,expAway,nextTitle;
    }
    else{
        title = 'Caffeholic'
        nextTitle = "Completed"
        expAway = 150 - userExp
        return title,expAway,nextTitle;
    } 
}

//Display User Title and progress
checkUserTitle();
var profileTitle = document.getElementById('profile-title');
profileTitle.textContent = title;

if(nextTitle == 'Completed'){
    var profileProgress = document.getElementById('profile-progress');
    profileProgress.textContent = "Congratulations! You have reached the highest rank!"
}
else{
    var profileProgress = document.getElementById('profile-progress');
    profileProgress.textContent = "You're " + expAway + ' xp towards ' + nextTitle;
}

progressBar = document.getElementById("progress")
progressBar.setAttribute('class','yes')

//Get UserName and Display
var userName = localStorage.getItem('username');
var profileUser = document.getElementById('profile-user');
profileUser.textContent = 'Welcome, ' + userName

//Get UserBeans and Display
var userBeans = localStorage.getItem('beans');
var profileBeans = document.getElementById('profile-beans');
profileBeans.textContent = userBeans + ' CoffeeBeans';












