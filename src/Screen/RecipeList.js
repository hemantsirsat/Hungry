import React, { useEffect } from 'react';
import { View } from 'react-native';
import useSearch from '../Hook/useSearch';
import RecipeListCard from '../Component/RecipeListCard';
import { FlatList } from 'react-native-gesture-handler';

const RecipeList = ({route, navigation}) => {
    const [FetchRecipe, searchResult, ErrorMessage] = useSearch('');

    useEffect(()=>{
        FetchRecipe(route.params.searchTerm);
    },[]);
    if(!searchResult){
        return null;
    }

    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
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