import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet } from 'react-native';

const RecipeDetails = ({ route }) => {
    const imageURL = route.params.item.recipe.image;
    return(
        <View style={{flex:1}}>
            <StatusBar style="auto" />
            <Image source={{uri:imageURL}} style={styles.headerimageStyle}/>
            <Text>{route.params.item.recipe.label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerimageStyle:{
        width:'auto',
        height:300
    }
});

export default RecipeDetails;