import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const RecipeCard = ({ DishImage, DishName }) => {
    let ImageUri = DishImage;
    return(
        <View style={styles.viewStyle}>
            <Image
                source={{uri:ImageUri}}
                style={styles.imageStyle}
            />
            <Text style={styles.dishStyle}>{DishName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        marginHorizontal:5,
    },  
    imageStyle:{
        width:200,
        height:120,
        borderRadius:10
    },
    dishStyle:{
        textAlign:'left',
        fontSize:19,
        width:180,
        padding:5
        
    }
});

export default RecipeCard;