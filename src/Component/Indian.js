import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useShows from '../Hook/useShows';
import RecipeCard from '../Component/RecipeCard';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Indian = ({category}) =>{
    const [FetchRecipe, Result, ErrorMessage] = useShows();
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
        marginTop:20,
    },
    categoryStyle:{
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:10
    }
});

export default Indian;