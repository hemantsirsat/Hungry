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
            <Text numberOfLines={1} style={styles.dishStyle}>{DishName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        paddingLeft:10,
        marginHorizontal:5,
    },  
    imageStyle:{
        width:310,
        height:180,
        borderRadius:15
    },
    dishStyle:{
        textAlign:'left',
        fontSize:19,
        width:300,
        marginVertical:10,
        fontWeight:'bold',
        fontSize:17,
        fontFamily:'sans-serif-thin'
        
    }
});

export default RecipeCard;