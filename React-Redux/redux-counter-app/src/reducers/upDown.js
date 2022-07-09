const initialState = 0;
//Reducer is a function which take two parameter state and action
//used to how to perform action
const changeTheNumber = (state = initialState,action) =>{ //Reducer function
    switch(action.type){
        case "INCREMENT":
            return state + action.payload;

        case "DECREMENT":
            return state - 1;

        default : return state
    }
}

export default changeTheNumber;