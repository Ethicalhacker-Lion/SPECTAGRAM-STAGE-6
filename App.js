import* as React from 'react';
import{createSwitcherNavigator,createAppContainer} from "react-navigator";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";

import * as firebase from "firebase";
import{ firebaseConfig } from "./config";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const AppSwitchNavigator = createSwitcherNavigator({
    LoadingScreen:LoadingScreen,
    LoginScreen:LoginScreen,
    DashboardScreen:DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App(){
    return(
        <AppNavigator/>
    )
}