export const incNumber = (num) =>{ //action creator
    return{
        type: "INCREMENT", //action type - what to do
        payload:num
    }
}

export const decNumber = () =>{
    return{
        type: "DECREMENT"
    }
}