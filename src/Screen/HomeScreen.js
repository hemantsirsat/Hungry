import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import useShows from '../Hook/useShows';

const HomeScreen =() =>{
    const [FetchRecipe, Result, ErrorMessage] = useShows();

    useEffect(()=>{
        FetchRecipe('pasta');
    },[]);
    console.log(Result);
       
    return(
        <View>
            <Text>Home Screen</Text>
            {Result.map((myDish)=>{
                return <Text>{myDish.recipe.label}</Text>
            })}
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;