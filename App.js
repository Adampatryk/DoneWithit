import React, { useState } from "react";
import { StyleSheet, Button, Image } from "react-native";
import MainNavigator from "./app/navigation/MainNavigator";

import { create } from "apisauce";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";

export default function App() {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {!user ? <AuthNavigator /> : <MainNavigator />}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
