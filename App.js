import { StatusBar } from "expo-status-bar";
import React from "react";

import firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5k4AYDoYQ0Wxpy-T1y1xxS9a8klUFqh8",
  authDomain: "picmediasite-dev.firebaseapp.com",
  projectId: "picmediasite-dev",
  storageBucket: "picmediasite-dev.appspot.com",
  messagingSenderId: "95700240409",
  appId: "1:95700240409:web:a4452362557f8984fbc288",
  measurementId: "G-NPJX7BWV40",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
