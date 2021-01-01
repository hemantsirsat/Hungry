import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity, Share } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import firebase from 'firebase';

const RecipeDetails = ({ route, navigation }) => {
    let recipeDetails='';
    {!route.params.item.recipe ? 
        recipeDetails=route.params.item.item.recipe
        : 
        recipeDetails=route.params.item.recipe 
    }
    const recipeName = recipeDetails.label;
    const imageURL = recipeDetails.image;
    const ingredients = recipeDetails.ingredientLines;
    const healthlabel = recipeDetails.healthLabels;
    const calories = parseFloat(recipeDetails.calories).toFixed(2);
    const totalWeight = parseFloat(recipeDetails.totalWeight).toFixed(2);
    const totalTime = parseFloat(recipeDetails.totalTime).toFixed(2);
    const recipeDetailsUrl = recipeDetails.url;

    // const userID = firebase.auth().currentUser.uid;

    // const ifAlreadyExists =(userID)=>{
    //     firebase
    //         .database()
    //             .ref('/users/'+userID+'/favourites/')
    //                 .once('value',function(recipe){
    //                     if(recipe.exists()){
    //                         return true;
    //                     }
    //                     else{
    //                         return false;
    //                     }
    //                 });
    // }

    // const addRemoveFavourite = (userID, recipe)=>{
    //     if(ifAlreadyExists(userID)){
    //         firebase
    //             .database()
    //                 .ref('users/'+userID+'/favourites/')
    //                     .remove({recipe});
    //     return false;
    //     }
    //     else{
    //         firebase
    //         .database()
    //             .ref('users/'+userID+'/favourites/')
    //                 .push({recipe});
    //         return true;
    //     }
    // }

    const onShare = async() =>{
        try{
            const result = await Share.share({
                message:'Hey, Check Out This Amazing Recipe on '+recipeName+' '+recipeDetailsUrl,
            });
            if (result.action === Share.dismissedAction){
                alert("Something Went Wrong! Try Again")
            }
        }
        catch(err){
            alert(error.message);
        }
    };

    return(
        <View style={{flex:1, backgroundColor:"#fff"}}>
            <StatusBar style='light' hidden={true} backgroundColor='rgba(0,0,0,0.5)'/>
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.shareViewStyle}>
                    <TouchableOpacity
                        onPress={()=>onShare()}
                    >
                        <Text style={styles.shareStyle}><Entypo name="share" size={28} color="white" /></Text>
                    </TouchableOpacity>
                </View>
                <Image source={{uri:imageURL}} style={styles.headerimageStyle}/>
                <View style={styles.contentStyle}>
                    <View style={styles.nameandfavStyle}>
                        <Text style={styles.labelStyle}>{recipeName}</Text>




                        {/* <TouchableOpacity
                            onPress={()=>{
                                addRemoveFavourite(userID, recipeDetailsUrl);
                                }
                            }
                            style={styles.favouritebuttonStyle}
                        >
                            <Entypo name="heart" size={24} color={addRemoveFavourite(userID,recipeDetailsUrl)?'#d90429':'#DEDEDE'} />
                        </TouchableOpacity> */}




                    </View>
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
                        {healthlabel.length!==0 ?
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
                    onPress={()=>navigation.navigate('InDetail',{website:recipeDetailsUrl})}
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
    shareViewStyle:{
        zIndex:1,
        position:'absolute',
        alignItems:'flex-end',
        right:0
    },
    shareStyle:{
        marginRight:15,
        marginTop:10,
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius:30,
        padding:10
    },
    contentStyle:{
        marginBottom:10
    },
    nameandfavStyle:{
        flexDirection:'row',
        marginTop:20,
        marginHorizontal:15,
        flex:1
    },
    favouritebuttonStyle:{
        marginLeft:'auto',
        marginHorizontal:10
    },
    labelStyle:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'left',
        marginRight:45
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
        color:'#2ec4b6'
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