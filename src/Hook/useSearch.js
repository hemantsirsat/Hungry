import { useState } from 'react';
import Edamam from '../Api/Edamam';

export default () =>{
    const [searchResult, setsearchResult] = useState([]);
    const [ErrorMessage, setErrorMessage] = useState('');

    const FetchRecipe = async ( searchTerm, app_id, api_key ,to ) =>{
        try{
            const response = await Edamam.get('/search',{
                params:{
                    q:searchTerm,
                    app_id:app_id,
                    app_key:api_key,
                    to:to,
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
