const reducer = (state,action) =>{
    if(state === undefined){
        return {
            name : ""
        }
    }

    switch(action.type){
        case 'setdata' :
            state.name = action.payload;
            break;
        default :
            break;
    }

    return { ...state };

    

  
}

export default reducer;