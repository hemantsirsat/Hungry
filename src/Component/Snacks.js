import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useRecipe from '../Hook/useRecipe';
import RecipeCard from './RecipeCard';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Snacks = ({category}) =>{
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
}

const styles = StyleSheet.create({
    viewStyle:{
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

export default Snacks;