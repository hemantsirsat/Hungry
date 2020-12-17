import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import useShows from '../Hook/useShows';

const HomeScreen =() =>{
    const [FetchRecipe, Result, ErrorMessage] = useShows();

    // useEffect(()=>{
    //     FetchRecipe('cheese pizza');
    // },[])
    // console.log(Result);

    return(
        <View>
            <Text>Home Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;