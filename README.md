<h1 align="center">Brews Co.</h1>
<p align="center"><img src="https://cdn.discordapp.com/attachments/880557292578287697/945873588597174292/Coffeelogo.png"></p>
<hr>

## Introduction

Github link: https://github.com/hao199/Brews-Co
Github webpage link: https://hao199.github.io/Brews-Co/

Brews Co. is an e-commerce company that promotes the activity of brewing coffee at home and sells high and various types of quality beans. This website provides consumers to platform is learn more about the art of brewing coffee and also advertise our coffee beans to them. 

The Brews Co. Website includes gamification features to attract more consumers. User can create accounts and earn attractive prizes.
 
## Design Process
 
This website is to promote the our coffee beans as well as educating them about brewing.
Therefore we designed our website based on a Cafe theme and used the colors scheme of coffees for the font.

For the process thinking for our website:
- As a product owner type, I want to attract users to buy more products, so i can earn more money.
- As a product owner type, I want the website to look good, so that users will stay on the website.
- As a user type, I want to explore the shop, so i can decide to buy the products.
- As a user type, I want to add to cart, so i can purchase produts that i decided to buy.
- As a user type, I want to check my coffee beans and experience points, so that i can check my progress to next title and redeem rewards

## Features

<h3 align="center">3D Model Display in Home Page</h3>
<p align="center"><img src="https://cdn.discordapp.com/attachments/880557292578287697/945887046545842196/unknown.png" width="600"><p>
<p align="center"><img src="https://cdn.discordapp.com/attachments/880557292578287697/945886004160659486/unknown.png" width="600"><p>

<h3 align="center">Account Creation and Log In</h3>

Users can sign up and login so that they can collect CoffeeBeans and Experience to earn rewards
There will be a try again alert to show the user if they failed to create account or log in
If successful the user will be redirected to the homepage.

Sign Up Page          |  Log In Page
:-------------------------:|:-------------------------:
![](https://cdn.discordapp.com/attachments/880557292578287697/945881132879208449/unknown.png)  |  ![](https://cdn.discordapp.com/attachments/880557292578287697/945881047088902164/unknown.png)

<h3 align="center">Profile Page and Redeeming Rewards</h3>

If logged In. The Profile Page will displayed the user name and how much Coffee Beans and Experience they have accumlated. The website
store and update the information. There is also a progress bar that shows how much is experience points
is needed left to the next Title.

Also in the profile page you can spent your coffee beans to redeem rewards

<p align="center"><img src="https://cdn.discordapp.com/attachments/880557292578287697/945883518020505600/unknown.png" width="600"><p>

<h3 align="center">Shop Page and Cart</h3>

The Shop Page displays all the coffee bean bags products and a button to add to cart.
The Cart shows all products that have been added to cart and the total price.
The Cart also allows users to increase the quantity
It is has a dropdown button that display the reward redeemed.
When the user pressed the buy button it calculates and display the amount of coffee beans and experience earned.

<p align="center"><img src="https://cdn.discordapp.com/attachments/880557292578287697/945887846710013982/unknown.png" width="600"><p>
<p align="center"><img src="https://cdn.discordapp.com/attachments/880557292578287697/945887991996510208/unknown.png" width="600"><p>
 
### Features Left to Implement
Unfortunately we didnt have enough time to implement actually using the rewards redeemed, it only keep tracks if you have redeemed it.
<p align="center"><img src="https://cdn.discordapp.com/attachments/880557292578287697/945891586498244638/unknown.png"></p>

also the responsive for the home page is really bad
<p align="center"><img src="https://cdn.discordapp.com/attachments/880557292578287697/945892725876748288/unknown.png" width="600"></p>


## Technologies Used

- [NodeJs and npm](https://nodejs.org/en/)
    - The project uses **NodeJs and npm** to install threejs package and dependencies and deployment to github

- [ThreeJs](https://threejs.org/)
    - The project uses **ThreeJs** to create a 3d Canvas to display 3d Models in the homepage

- [Bootstrap5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    - The project uses **Bootstrap5** to create responsive container and use preset navbar,progress bar,etc.

- [Bootstrap Icon](https://icons.getbootstrap.com/)
    - The project uses **Boostrap** to access easy use of icons

- [restdb.io](https://restdb.io/)
    - The project uses **restdb** to create a database api that stores user account data fields

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to select elements and GET and POST data from API


## Testing
1. Nav Bar:
- Nav Bar wasnt working on some pages(BUG)
- The reason was script for bootstrap was placed wrongly(FIXED)

2. Home Page:
- The 3d models do not scale and change locations correctly displaying them at the wrong place
- inexperience with the threejs library

3. Shop Page:
- The Shop Cart Delete button doesnt work and when clicked bugs the whole cart(BUG)

## Credits
### Documentation that helped
- https://threejs.org/docs/
- https://getbootstrap.com/docs/5.1/getting-started/introduction/
- https://www.youtube.com/watch?v=Q7AOvWpIVHU&t=156s&ab_channel=Fireship

### Links and videos that help me understand threejs
- https://www.youtube.com/watch?v=pUgWfqWZWmM
- https://www.youtube.com/watch?v=Q7AOvWpIVHU&t=156s&ab_channel=Fireship
- https://sbcode.net/threejs/animate-on-scroll/
- https://hackernoon.com/publishing-a-threejs-project-on-github-pages-1d1a33dn

### Acknowledgements
I received inspiration for these website:
- https://meadlight.com/en
- https://nam-cung.com/
- http://www.coffeecava.ru/
