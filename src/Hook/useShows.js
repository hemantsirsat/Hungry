import { useState, useEffect } from 'react';
import Edamam from '../Api/Edamam';

export default () =>{
    const [Result, setResult] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('');

    const FetchShows = async ({ myRecipe }) =>{
        try{
            const response = await Edamam.get('/search',{
                params:{
                    q:myRecipe,
                    app_id:'a12f52f6',
                    app_key:'213b11b94f0dd9e10128114b44ada03a'
                }
            });
            setResult(response.data);
            console.log(Result);
        }
        catch(err){
            setErrorMessage("Something Went Wrong! Retry");
        }
    };

    useEffect(()=>{
        FetchShows("Breaking Bad");
    },[])

    return [FetchShows, Result, ErrorMessage];
}
