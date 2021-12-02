import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/RestaurantDetail/About";
import MenuItem from "../components/RestaurantDetail/MenuItem";
import ViewCart from "../components/RestaurantDetail/ViewCart";

const foods = [
  {
    title: "Hamburger with fries",
    description: "Hamburger with lettuce tomato onions pickels with the option of cheese. Fries included.",
    price: "$13.50",
    image:
      "https://www.aspicyperspective.com/wp-content/uploads/2020/07/best-hamburger-patties-1.jpg",
  },
  {
    title: "Hot Dog",
    description:
      "All beef hot dog with optional ketchup, mustard, mayo, and relish.",
    price: "$19.20",
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2021%2F08%2F24%2Fhotdog-GettyImages-1163965971.jpg&q=85",
  },
  {
    title: "BLTA",
    description:
      "Classic bacon lettuce and tomato sandwich with avocado. Serverd on white bread.",
    price: "$14.50",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg?crop=0.667xw:1.00xh;0.109xw,0&resize=640:*",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins.",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "Spaghetti Bolognese",
    description: "Spaghetti with an Italian ragù made with minced beef, bacon and tomatoes, served with Parmesan cheese.",
    price: "$13.50",
    image:
      "https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1-500x480.jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} foods={foods} /> 
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
