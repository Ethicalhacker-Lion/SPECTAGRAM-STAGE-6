import React,{Component} from 'react';
import {Button, Text, Touchable, TouchableOpacity, View} from 'react-native';

export default class LoginScreen extends component {
    render() {
        if(!this.state.fontsLoaded) {
            return <AppLoading/>;
        }else {
return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <Image
                    source={require('../assest/logo.png')}
                    style={styles.appIcon}></Image>
                    <Text style={styles.appTitleText}>{'Story Telling\nApp'}</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.signInWithGoogleAsync()}>
                            <Image 
                            source={require("../assest/google_icon.png")}
                            style={styles.googleIcon}></Image>
                            <Text style={styles.googleText}>Sign in with Google</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={styles.cloudContainer}>
                                <Image 
                                source={require("../assest/cloud.png")}
                                style={styles.cloudImage}></Image>
                                </View>
                                </View>
     );        

            toggleSwitch() {
                const previous_state = this.state.isEnabled;
                const theme =!this.state.isEnabled ? "dark":"light"
                var updates = {}
                updates["\users\" + firebase.auth().curentUser.uid + "\current_theme"] = theme
                firebase.database().ref().update(updates);
                this.setState({isEnabled: !previous_state,light_theme: previous_state})                                                                                 
            };

            <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Button  title = "Sign in with Google"
             onPress={() =>this.signInWithGoogleAsync()}></Button>

              

                
                </View>
        
    }

}
}