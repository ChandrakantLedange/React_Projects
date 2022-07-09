export const incNumber = () =>{ //action creator
    return{
        type: "INCREMENT" //action type - what to do
    }
}

export const decNumber = () =>{
    return{
        type: "DECREMENT"
    }
}