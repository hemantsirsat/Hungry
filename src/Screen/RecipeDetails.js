import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

const RecipeDetails = ({ route }) => {
    const recipeDetails = route.params.item.recipe

    const imageURL = recipeDetails.image;
    const ingredients = recipeDetails.ingredientLines;
    const calories = parseFloat(recipeDetails.calories).toFixed(2);
    const totalWeight = parseFloat(recipeDetails.totalWeight).toFixed(2);
    const totalTime = parseFloat(recipeDetails.totalTime).toFixed(2);

    return(
        <View style={{flex:1}}>
            <StatusBar style="auto" />
            <ScrollView>
                <Image source={{uri:imageURL}} style={styles.headerimageStyle}/>
                <View style={styles.contentStyle}>
                    <Text style={styles.labelStyle}>{recipeDetails.label}</Text>
                    <View style={styles.inshortStyle}>
                        <Text style={styles.innerinshortStyle}>{calories}{"\n"} Kcal</Text>
                        <Text style={styles.innerinshortStyle}>{totalWeight}{"\n"} g</Text>
                        <Text style={styles.innerinshortStyle}>{totalTime}{"\n"} min</Text>
                    </View>
                    <View style={styles.ingredientHeadingStyle}>
                        <MaterialIcons name="list-alt" size={22} color="black" />
                        <Text style={styles.textStyle}>
                            Ingredients
                        </Text>
                    </View>
                    {ingredients.map((items)=>
                        <Text style={styles.ingredientStyle}>{items}</Text>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    headerimageStyle:{
        width:'auto',
        height:500,
    },
    contentStyle:{
        marginHorizontal:15,
        marginBottom:10
    },  
    labelStyle:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:20,
        textAlign:'left'
    },  
    inshortStyle:{
        flexDirection:'row',
        height:60,
        justifyContent:'center',
        marginVertical:15
    },
    innerinshortStyle:{
        alignSelf:'center',
        marginHorizontal:30,
        textAlign:'center',
        fontSize:15,
    },
    ingredientHeadingStyle:{
        flexDirection:'row',
        marginVertical:10,
    },
    textStyle:{
        fontSize:22,
        fontWeight:'bold',
        paddingLeft:7,
    },
    ingredientStyle:{
        marginVertical:6,
        fontSize:17
    }
});

export default RecipeDetails;