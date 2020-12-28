import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

class LoadingScreen extends Component {

    componentDidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn =()=>{
        firebase.auth().onAuthStateChanged(user=>{
                if(user){
                    this.props.navigation.replace('TabNavigation');
                }
                else{
                    this.props.navigation.replace('SignIn')
                }
            }
        )
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <ActivityIndicator size="large" color="#000"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default LoadingScreen;