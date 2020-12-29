import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/chair.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={ListItemDeleteAction}
            ItemSeparatorComponent={ListItemSeperator}
          />
        )}
      ></FlatList>
    </Screen>
  );
}
