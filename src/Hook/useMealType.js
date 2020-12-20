import { useState } from 'react';
import Edamam from '../Api/Edamam';

export default () =>{
    const [Meal, setMeal] = useState([]);
    const [ErrorMessage, setErrorMessage] = useState('');

    const FetchRecipe = async ( myMeal ) =>{
        try{
            const response = await Edamam.get('/search',{
                params:{
                    q:myMeal,
                    app_id:'32dcafc2',
                    app_key:'c5960c46386090187c95a5aa8ef43505',
                    to:'20',
                    myMeal
                }
            });
            setMeal(response.data.hits);
            console.log(Meal);
        }
        catch(err){
            setErrorMessage("Something Went Wrong! Retry");
        }
    };
    return [FetchRecipe, Meal, ErrorMessage];
}
