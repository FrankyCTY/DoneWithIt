import React from "react";
import { FlatList, Platform, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "Red jacket for sale",
    price: 1000,
    image: require("../assets/chair.jpg"),
  },
  {
    id: 3,
    title: "Red jacket for sale",
    price: 200,
    image: require("../assets/chair.jpg"),
  },
  {
    id: 4,
    title: "Red jacket for sale",
    price: 400,
    image: require("../assets/chair.jpg"),
  },
  {
    id: 5,
    title: "Red jacket for sale",
    price: 4020,
    image: require("../assets/chair.jpg"),
  },
];

export default function ListingScreen() {
  return (
    <Screen otherStyles={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`$${item.price}`}
            image={item.image}
          ></Card>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === "ios" ? 20 : 10,
    backgroundColor: colors.light,
  },
});
