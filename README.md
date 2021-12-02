 ### To start app - *after pulling repo*

 
1. npm start / expo start 
2. press i | open IOS simulator
3. press r | to reload (if necessary)

<hr>

## App Description

###### This is an uber eats clone built with **React Native**, using **Redux** to handle state, **Yelp and Google Places APIs** for restaurants and location services, and **Firebase** to house data. 

###### With the option to cycle delivery and pickup options at the top center of the screen, you can search any location with Google's Places API and the feed will update with restaurants from that area using the YELP API. 

<img src="/assets/readme_images/screen_one_with_location.png" height="600">

###### The restaurants will then give you the cooresponding type of food, customer reviews (rated on a 5 point scale), and how many customer reviews there are for the specific restaurant, as well as how expensive the restaurant is.

<img src="/assets/readme_images/menu_items.png" height="600">

###### As for food, the menu items are hard coded into the screen since the YELP API doesn't give menu items and unless included by customers, and typically it is just an image of a restaurant's menu. You are able to add items to your cart with the checkbox to the left of each food item. The item will then be added to your cart as indicated by the "View Cart" button at the bottom of the screen. This button, once engaged, will also show the total price of your order, with this data persisting even after leaving the screen. Clicking on the "checkout" button will show you a subtotal and a final "checkout" button will then take you to the final scren indicating that your order has been placed successfully. 

<img src="/assets/readme_images/checkoutOne.png" height="600">
<img src="/assets/readme_images/checkoutTwo.png" height="600">

###### Data is stored via Firebase Firestore

<img src="/assets/readme_images/firestore.png">