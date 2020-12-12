import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "./../components/Screen";

import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "./../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2 LoremLoremLoremLoremLoremLoremLoremLoremLorem ",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description 3",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (messageToDelete) => {
    setMessages(messages.filter((m) => m.id !== messageToDelete.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            showChevrons={true}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default MessagesScreen;
