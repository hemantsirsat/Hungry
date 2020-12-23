import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useSearch from '../Hook/useSearch';
import RecipeCard from './RecipeCard';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Categories = ({ category, destination, api_id, api_key, from, to }) =>{
    const [FetchRecipe, Result, ErrorMessage] = useSearch();

    useEffect(()=>{
        FetchRecipe(category, api_id, api_key, from,to);
    },[]);
    if(!Result){
        return null;
    }

    return(
        <View style={styles.viewStyle}>
            <View style={styles.headingStyle}>
                <Text style={styles.categoryStyle}>{category}</Text>
                <TouchableOpacity
                    onPress={()=>{
                        destination.navigate('RecipeList',{searchTerm:category,api_id,api_key, from:16,to:50})
                    }}
                >
                    <Text style={styles.moreStyle}>More</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Result}
                keyExtractor={(item)=>item.recipe.uri}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={()=>{destination.navigate('Recipe',{item})}}
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
    headingStyle:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    categoryStyle:{
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:15,
        paddingVertical:18,
        fontSize:20
    },
    moreStyle:{
        textAlign:'right',
        paddingRight:15,
        paddingVertical:18
    }
});

export default Categories;