import { useState, useEffect } from 'react';
import Edamam from '../Api/Edamam';

export default () =>{
    const [Result, setResult] = useState([]);
    const [ErrorMessage, setErrorMessage] = useState('');

    const FetchRecipe = async ( myRecipe ) =>{
        try{
            const response = await Edamam.get('/search',{
                params:{
                    q:myRecipe,
                    app_id:'a12f52f6',
                    app_key:'213b11b94f0dd9e10128114b44ada03a',
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
