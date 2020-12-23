import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useMealType from '../Hook/useMealType';
import RecipeCard from './RecipeCard';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Breakfast = ({ category, destination }) =>{
    const [FetchRecipe, Meal, ErrorMessage] = useMealType();

    useEffect(()=>{
        FetchRecipe(category);
    },[]);
    if(!Meal){
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
                data={Meal}
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
        paddingVertical:18,
    }
});

export default Breakfast;