import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useRecipe from '../Hook/useRecipe';
import RecipeCard from './RecipeCard';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Quick = ({category, destination}) =>{
    const [FetchRecipe, Result, ErrorMessage] = useRecipe();

    useEffect(()=>{
        FetchRecipe(category);
    },[]);
    if(!Result){
        return null;
    }
    
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.categoryStyle}>{category}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Result}
                keyExtractor={(item)=>item.recipe.uri}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={()=>{destination.navigate('Recipe')}}
                        >
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
}

const styles = StyleSheet.create({
    viewStyle:{
        marginTop:20,
        marginVertical:5
    },
    categoryStyle:{
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:15,
        paddingVertical:18,
        fontSize:20
    }
});

export default Quick;