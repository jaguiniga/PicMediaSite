import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'

import { View, Text } from 'react-native'
 //import * as firebase from 'firebase'
import firebase from "firebase/app"
firebase.initializeApp({ firebaseConfig })
 // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5k4AYDoYQ0Wxpy-T1y1xxS9a8klUFqh8",
  authDomain: "picmediasite-dev.firebaseapp.com",
  projectId: "picmediasite-dev",
  storageBucket: "picmediasite-dev.appspot.com",
  messagingSenderId: "95700240409",
  appId: "1:95700240409:web:a4452362557f8984fbc288",
  measurementId: "G-NPJX7BWV40"
};
if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'



const Stack = createStackNavigator();


export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) =>{
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
      
    })
  }
  render() {
    const { loggedIn, loaded} = this.state;
    if(!loaded){
      return(
        <View style={{flex:1, justifyContent: 'center'}}>
          <Text>User is logged in</Text>
        </View>
      )
    }

    if (!loggedIn){
      return (
        <NavigationContainer>{/* Rest of your app code */}
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
   }
 }
}
export default App



