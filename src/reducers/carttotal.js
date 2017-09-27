var iniialState=({
    total:0
})

export default function(state=iniialState,action){

    switch(action.type){
        case "ADD_TO_CART":
        {
            return(
                {total: state.total+action.data.price}
            );
        }

        case "REMOVE_FROM_CART":
        {
            return(
                {total: state.total-action.data.price}
            );
        }

        default:
            return state;
    }
    return state;
}