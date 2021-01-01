import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as GoogleSignIn from 'expo-google-app-auth';
import firebase from 'firebase';
import { AntDesign } from '@expo/vector-icons';

class SignInScreen extends Component {

    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
              // We don't need to reauth the Firebase connection.
              return true;
            }
          }
        }
        return false;
      }

     onSignIn = (googleUser) =>{
        console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase
            .auth()
            .onAuthStateChanged((firebaseUser) => {
                unsubscribe();
                // Check if we are already signed-in Firebase with the correct user.
                if (!this.isUserEqual(googleUser, firebaseUser)) {
                    // Build Firebase credential with the Google ID token.
                    var credential = firebase.auth.GoogleAuthProvider.credential(
                        googleUser.idToken,
                        googleUser.accessToken
                    );
                    
                        firebase
                        .auth()
                        .signInWithCredential(credential)
                        .then(function(result){
                            if(result.additionalUserInfo.isNewUser)
                            {
                                firebase    
                                    .database()
                                    .ref('/users/'+result.user.uid)
                                    .set({
                                        gmail: result.user.email,
                                        profile_picture: result.additionalUserInfo.profile.picture,
                                        first_name: result.additionalUserInfo.profile.given_name,
                                        last_name: result.additionalUserInfo.profile.family_name,
                                        created_at:Date.now()
                                    })
                        
                            }
                            else{
                                firebase
                                    .database()
                                    .ref('/users/'+result.user.uid).update({
                                        last_logged_in:Date.now()
                                    });
                            }
                        })
                    // Sign in with credential from the Google user.
                    
                        .catch((error) => {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            // The email of the user's account used.
                            var email = error.email;
                            // The firebase.auth.AuthCredential type that was used.
                            var credential = error.credential;
                            // ...
                        });
                } else {
                    console.log('User already signed-in Firebase.');
                }
        }).bind(this);
      }

    signInWithGoogleAsync = async()=>{
        try{
            const result = await GoogleSignIn.logInAsync({
                behaviour:'web',
                androidStandaloneAppClientId:'583854753457-b3h146rn36j9s4sq7oip3bm70uqdk2tp.apps.googleusercontent.com',
                androidClientId:'583854753457-j69e3fs3bevk3ed8204mmipfd6og74jj.apps.googleusercontent.com',
                iosClientId:'583854753457-9sjt9g76il676kjh033rq0jgg165leu8.apps.googleusercontent.com',
                scopes:['profile','email']
            })
            if(result.type === 'success'){
                this.onSignIn(result);
            }
            else{
                return this.props.navigation.replace('SignIn')
            }
        }
        catch(err){
            console.log(err)
            return{error:true}
        }
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <Image 
                    source={require('../../assets/SignIn.png')}
                    style={styles.imageStyle}
                />
                <View style={{alignItems:'center'}}>
                    <Text style={styles.titleStyle}>Hungry</Text>
                </View>
                <TouchableOpacity
                   onPress={()=> this.signInWithGoogleAsync()}
                   style={styles.buttonStyle}
                >   
                    <View style={styles.buttonTextStyle}>
                        <AntDesign name="google" size={20} color="#fff" />
                        <Text style={styles.textStyle}>Sign In Using Google</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    imageStyle:{
        width:200,
        height:200,
        alignSelf:'center'
    },
    buttonStyle:{
        marginVertical:15,
        marginHorizontal:25,
        backgroundColor:'#4285F4',
        height:45,
        borderRadius:10,
        justifyContent:'center'
    },
    buttonTextStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        alignSelf:'center',
        fontSize:20,
        color:'#fff',
        paddingLeft:10,
    },
    titleStyle:{
        fontSize:35,
        fontWeight:'bold'
    },
});

export default SignInScreen;