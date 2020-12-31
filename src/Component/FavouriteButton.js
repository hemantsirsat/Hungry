import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import firebase from 'firebase';

const FavouriteButton =({ recipe })=>{
    const [favbutton, setFavButton] = useState(false);

    const userID = firebase.auth().currentUser.uid;

    const ifAlreadyExists =(userID)=>{
        firebase
            .database()
                .ref('/users/'+userID+'/favourites/')
                    .once('value',function(recipe){
                        if(recipe.exists()){
                            setFavButton(true);
                            return true;
                        }
                    });
    }

    const addRecipeToFirebase = (userID)=>{
        firebase
            .database()
                .ref('users/'+userID+'/favourites/')
                    .push({recipe});
    }

    useEffect(()=>{
        ifAlreadyExists(userID)
    })

    return(
        <TouchableOpacity
            onPress={()=>{
                ifAlreadyExists(userID);
                }
            }
            style={styles.favouritebuttonStyle}
        >
            <Entypo name="heart" size={24} color={favbutton?'#d90429':'#DEDEDE'} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    favouritebuttonStyle:{
        marginLeft:'auto',
        marginHorizontal:10
    },
});

export default FavouriteButton;