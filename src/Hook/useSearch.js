import { useState } from 'react';
import Edamam from '../Api/Edamam';

export default () =>{
    const [searchResult, setsearchResult] = useState([]);
    const [ErrorMessage, setErrorMessage] = useState('');

    const FetchRecipe = async ( searchTerm ) =>{
        try{
            const response = await Edamam.get('/search',{
                params:{
                    q:searchTerm,
                    app_id:'949e6c53',
                    app_key:'abb80fc1f374e1152307b04a957af513',
                    to:'40',
                }
            });
            setsearchResult(response.data.hits);
        }
        catch(err){
            setErrorMessage("Something Went Wrong! Retry");
        }
    };
    return [FetchRecipe, searchResult, ErrorMessage];
}
