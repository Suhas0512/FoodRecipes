import axios from '../config/axios'
import Swal from 'sweetalert2'

export const addRecipes = (recipes) => {
    return {type : 'ADD_RECIPES' , payload : recipes}
}

export const startGetAllRecipes = () => {
    return(dispatch)=>{
        axios.get('/allRecipes')
            .then((response)=>{
                dispatch(addRecipes(response.data))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startAddRecipeByUser = (obj) => {
    return(dispatch)=>{
        axios.post('/recipes',obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            Swal.fire(
                'Success',
                'Posted successfully',
                'success'
            )  
            dispatch(startGetAllRecipes())
            obj.redirect('/')

        })
        .catch((err)=>{
            console.log(err)
        })
    }
}