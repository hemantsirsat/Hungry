import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import useShows from '../Hook/useShows';
import RecipeCard from '../Component/RecipeCard';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useReducer } from 'react';

const HomeScreen =() =>{
    const [FetchRecipe, Result, ErrorMessage] = useShows();

    if(!Result){
        return null;
    }

    return(
        <View style={styles.viewStyle}>
            <StatusBar style='auto' />
            <Text style={styles.categoryStyle}>Indian</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Result}
                keyExtractor={(item)=>item.recipe.uri}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <RecipeCard 
                                DishImage={item.recipe.image}
                                DishName={item.recipe.label}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        marginTop:20,
    },
    categoryStyle:{
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:10
    }
});

export default HomeScreen;