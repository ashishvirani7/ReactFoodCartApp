export const addToCart=(item) => {
    return(
    {
        type:"ADD_TO_CART",
        data: item
    }
    );
}

export const removeFromCart=(item) => {
    console.log("fromrfc");
    return(
    {
        type:"REMOVE_FROM_CART",
        data: item
    }    
    );
}
