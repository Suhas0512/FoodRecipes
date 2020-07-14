const intialState = []

const recipesReducers = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_RECIPES' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default recipesReducers