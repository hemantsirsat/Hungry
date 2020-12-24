import { useState } from 'react';
import Edamam from '../Api/Edamam';

export default () =>{
    const [searchResult, setsearchResult] = useState([]);
    const [ErrorMessage, setErrorMessage] = useState('');

    const FetchRecipe = async ( searchTerm, app_id, api_key, from, to ) =>{
        try{
            const response = await Edamam.get('/search',{
                params:{
                    q:searchTerm,
                    app_id:app_id,
                    app_key:api_key,
                    from:from,
                    to:to,
                }
            });
            if(response.data.hits.length==0){
                throw "Error While Fetching"
            }
            setsearchResult(response.data.hits);
            
        }
        catch(err){
            setErrorMessage("No Such Recipe Found! Try Something Else");
        }
    };
    return [FetchRecipe, searchResult, ErrorMessage];
}
