import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Image, StyleSheet, Text } from 'react-native';
import useSearch from '../Hook/useSearch';
import RecipeListCard from '../Component/RecipeListCard';
import { StatusBar } from 'expo-status-bar';

const RecipeList = ({route, navigation}) => {
    const [FetchRecipe, searchResult, ErrorMessage] = useSearch('');
    const parameters = route.params;

    useEffect(()=>{      
        FetchRecipe(parameters.searchTerm, parameters.api_id, parameters.api_key, parameters.from, parameters.to)
    },[]);

    const DishNotFound =() =>{
        return(
                <Image
                    source={require('../../assets/ErrorPage.png')}
                    style={{width:300,height:200, alignSelf:'center'}}
                />
        )
    }
    if(searchResult.length===0){
        if(ErrorMessage.length===0){
            return(
                <View style={styles.viewStyle}> 
                    <ActivityIndicator size='large' color='#a9d6e5' />
                </View>
            )
        }
        else{
            return(
                <View style={styles.viewStyle}>
                    <DishNotFound />
                    <Text style={styles.textStyle}>{ErrorMessage}</Text>
                </View>
            )
        }
    }
    return (
        <View style={styles.viewStyle}>
            <StatusBar style='dark' />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={searchResult}
                    keyExtractor={(item)=>item.recipe.uri}
                    renderItem={(item)=>{
                        return(
                            <RecipeListCard 
                                dish={item}
                                navigation={navigation}
                            />
                        )
                    }}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        paddingTop:25, 
        backgroundColor:'#fff', 
        justifyContent:'center'
    },
    textStyle:{
        fontSize:19,
        alignSelf:'center',
        fontWeight:'bold',
        textAlign:'center',
        marginHorizontal:20
    }
})

export default RecipeList;