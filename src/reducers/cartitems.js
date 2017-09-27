export default function(state=[],action){
    switch(action.type){
        case "ADD_TO_CART":
        {
            console.log(state.length); 
            if(state.length===0){
                var newState=
                [
                    {id:action.data.id,
                    title:action.data.title,
                    price:action.data.price,
                    quantity:1}
                ]
                return newState;
            }
            
            else{
                var newState=state;
                var isPresent=false;
                newState=state.map(item =>{
                    if(item.id === action.data.id){
                        isPresent=true;
                        return {...item, quantity: item.quantity+1}
                    } 
                    else{
                        return item;
                    }
                })
                if(isPresent){
                    return newState;
                }
                    
                else{
                    return[
                        ...state,
                        {
                            id:action.data.id,
                            title:action.data.title,
                            price:action.data.price,
                            quantity:1
                        }
                    ]
                }
            }
            break;
           
        }
        
        case "REMOVE_FROM_CART":
        {
            if(action.data.quantity >1){
                return state.map(item =>
                    (item.id === action.data.id) 
                      ? {...item, quantity: item.quantity-1}
                      : item
                  )
            }
            else{
                var index;
                var newState=[],j=0;
                for(var i=0;i<state.length;i++){
                    if(state[i].id!==action.data.id){
                        newState[j]=state[i];
                        j++;
                }
            }
            return newState;
            
            }
        }


        default:
            return state;        
    }    
}
