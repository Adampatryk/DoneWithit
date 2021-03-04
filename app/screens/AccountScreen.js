import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import colours from "../config/colours";

import Screen from "../components/Screen";
import Icon from "./../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "menu",
      backgroundColor: colours.primaryColour,
    },
    destination: "Account",
  },
  {
    title: "My Messages",
    icon: {
      name: "mail",
      backgroundColor: colours.secondaryColour,
    },
    destination: "Messages",
  },
];

function AccountScreen(props) {
  const { user, setUser } = useContext(AuthContext);
  const navigator = useNavigation();

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/couch.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigator.navigate(item.destination)}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Logout"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
          onPress={handleLogout}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colours.light,
  },
  container: {
    marginVertical: 10,
  },
});

export default AccountScreen;
