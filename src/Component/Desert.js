import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useRecipe2 from '../Hook/useRecipe2';
import RecipeCard from './RecipeCard';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Desert = ({ category, destination }) =>{
    const [FetchRecipe, Result, ErrorMessage] = useRecipe2();

    useEffect(()=>{
        FetchRecipe(category);
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
                        destination.navigate('RecipeList',{searchTerm:category})
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

export default Desert;