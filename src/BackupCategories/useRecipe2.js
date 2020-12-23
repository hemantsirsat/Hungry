import { useState } from 'react';
import Edamam from '../Api/Edamam';

export default () =>{
    const [Result, setResult] = useState([]);
    const [ErrorMessage, setErrorMessage] = useState('');

    const FetchRecipe = async ( myRecipe ) =>{
        try{
            const response = await Edamam.get('/search',{
                params:{
                    q:myRecipe,
                    app_id:'9bf554ef',
                    app_key:'4e8dbbdce63504939827457b135b6a14',
                    to:'20'
                }
            });
            setResult(response.data.hits);
        }
        catch(err){
            setErrorMessage("Something Went Wrong! Retry");
        }
    };
    return [FetchRecipe, Result, ErrorMessage];
}
