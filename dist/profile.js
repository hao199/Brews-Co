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












