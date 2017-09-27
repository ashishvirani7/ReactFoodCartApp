import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {removeFromCart} from '../actions/index.js';

var divRectangleInner = {
    width:'95%',
    height:'85px',
    border:'1px solid #000',
    'margin-top' : '2%',
}


class CartList extends Component{

    createListItems() {
        return this.props.cartitems.map((item) => {
            console.log("ITEM:"+item);
            return(
                <div key={item.id} style={divRectangleInner}>
                    <span class="row">
                        <span style={{width:'60%',float:'left','margin-top' : '4%',}}>
                            <font size="6"> {item.title} </font>
                        </span>
                        <span style={{width:'20%',float:'left','margin-top' : '3%',}}>
                            <div><font size="4">$ {parseFloat(item.price).toFixed(2)} </font></div>
                            <div><font size="4">Qty: {(item.quantity)}</font></div>
                        </span>
                
                        <span style={{width:'20%',float:'left','margin-top' : '6%',}}>                           
                            <button key={item.id} type="button"
                            onClick={ () => this.props.removeFromCart(item)}>
                            REMOVE </button>
                        </span>       
                    </span>
                </div>
            );   
        }
        );
    }

    render(){
        if(!this.props.cartitems)
            return(<div></div>);
        else{
            console.log(this.props.cartitems);
            return(
                <ul>
                    {this.createListItems()}
                </ul>
            );
        }
        
    }
    
}

function mapStateToProps(state){
    return{
        cartitems : state.cartitems
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({removeFromCart:removeFromCart},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(CartList);