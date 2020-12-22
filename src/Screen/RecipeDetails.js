import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

const RecipeDetails = ({ route, navigation }) => {
    let recipeDetails='';
    {!route.params.item.recipe ? 
        recipeDetails=route.params.item.item.recipe
        : 
        recipeDetails=route.params.item.recipe 
    }
    const imageURL = recipeDetails.image;
    const ingredients = recipeDetails.ingredientLines;
    const healthlabel = recipeDetails.healthLabels;
    const calories = parseFloat(recipeDetails.calories).toFixed(2);
    const totalWeight = parseFloat(recipeDetails.totalWeight).toFixed(2);
    const totalTime = parseFloat(recipeDetails.totalTime).toFixed(2);

    return(
        <View style={{flex:1, backgroundColor:"#fff"}}>
            <StatusBar style='dark' backgroundColor='#fff'/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={{uri:imageURL}} style={styles.headerimageStyle}/>
                <View style={styles.contentStyle}>
                    <Text style={styles.labelStyle}>{recipeDetails.label}</Text>
                    <View style={styles.inshortStyle}>
                        <Text style={styles.innerinshortStyle}>
                            <Text>{calories}{"\n"}</Text> 
                            <Text style={styles.unitStyle}>Kcal</Text>
                        </Text>
                        <Text style={styles.innerinshortStyle}>
                            <Text>{totalWeight}{"\n"}</Text> 
                            <Text style={styles.unitStyle}>g</Text>    
                        </Text>
                        <Text style={styles.timeStyle}>
                            { parseFloat(totalTime)===0.00 ?
                                    <Text>N/A{"\n"}</Text> 
                                :
                                    <Text>{totalTime}{"\n"} </Text>
                            }
                            <Text style={styles.unitStyle}>min</Text>
                        </Text>
                    </View>
                    
                    <View style={{paddingRight:5}}>
                        {healthlabel ?
                        <View>
                        <Text style={styles.healthheaderStyle}>Health Labels</Text>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={healthlabel}
                            keyExtractor={(item)=>item}
                            renderItem={({item})=>{
                                return(
                                    <Text style={styles.healthlabelStyle}>{item}</Text>
                                )
                            }}    
                        />
                        </View>
                        :null}
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
                <TouchableOpacity
                    style={styles.knowMoreStyle}
                    onPress={()=>navigation.navigate('InDetail',{website:recipeDetails.url})}
                >
                    <Text style={styles.tapStyle}>Tap Here To Know More!</Text>
                </TouchableOpacity>
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
        marginBottom:10
    },  
    labelStyle:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:20,
        textAlign:'left',
        marginHorizontal:15,

    },  
    inshortStyle:{
        flexDirection:'row',
        height:60,
        justifyContent:'center',
        marginVertical:15,
        marginHorizontal:15,

    },
    innerinshortStyle:{
        alignSelf:'center',
        marginHorizontal:30,
        textAlign:'center',
        fontSize:15,
    },
    timeStyle:{
        alignSelf:'center',
        marginHorizontal:30,
        textAlign:'center',
        fontSize:15,
        color:'#00a896'
    },
    unitStyle:{
        fontWeight:'bold'
    },
    healthheaderStyle:{
        fontSize:22,
        paddingLeft:15,
        fontWeight:'bold'
    },
    healthlabelStyle:{
        marginHorizontal:15,
        backgroundColor:'#dee2e6',
        borderRadius:10,
        padding:10,
        marginVertical:10

    },
    ingredientHeadingStyle:{
        flexDirection:'row',
        marginVertical:10,
        marginHorizontal:15,

    },
    ingredientStyle:{
        marginVertical:6,
        fontSize:17,
        marginHorizontal:15,
    },
    textStyle:{
        fontSize:22,
        fontWeight:'bold',
        paddingLeft:7,
    },
    knowMoreStyle:{
        bottom:0,
        height:40,
        justifyContent:'center',
        backgroundColor:'#000',
    },
    tapStyle:{
        color:'#fff',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:15
    }
});

export default RecipeDetails;