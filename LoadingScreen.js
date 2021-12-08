import React,{Component} from 'react';
import {Text, View,ActivityIndicator} from 'react-native';
import firebase from 'firebase';


export default class LoadingScreen extends component {

    componentDidMount() {
        this.checkifLoggedIn()
    }


    checkifLoggedIn = () => {
        firebase.auth().onAuthStateChange((user) => {
            if(user){
                this.props.navigation.navigate('DashboardScreen')
            } else {
                this.props.navigation.navigate('LoginScreen')
            }
        })
    }

    render() {
        return(
            <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text>Loading</Text>
                </View>
        )
    }
}