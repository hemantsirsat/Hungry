import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import useSearch from '../Hook/useSearch';
import RecipeListCard from '../Component/RecipeListCard';
import { StatusBar } from 'expo-status-bar';

const RecipeList = ({route, navigation}) => {
    const [FetchRecipe, searchResult, ErrorMessage] = useSearch('');
    const parameters = route.params;
    
    useEffect(()=>{
        FetchRecipe(parameters.searchTerm, parameters.api_id, parameters.api_key, parameters.from, parameters.to);
    },[]);
    if(!searchResult){
        return null;
    }

    return (
        <View style={{flex:1, paddingTop:25}}>
            <StatusBar style='dark'  />
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

export default RecipeList;