import React, { useEffect, useState } from "react";
import { StyleSheet, Button, Image } from "react-native";
import MainNavigator from "./app/navigation/MainNavigator";
import jwtDecode from "jwt-decode";
import { AppLoading } from "expo";

import { create } from "apisauce";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;

    setUser(jwtDecode(token));
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
    );

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
