import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addToCart} from '../actions/index.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

var divRectangleInner = {
    width:'90%',
    height:'85px',
    border:'1px solid #000',
    'margin-left' : '5%',
    'margin-top' : '2%',
}

class ItemList extends Component{
    createListItems() {
        return this.props.items.map((item) => {
            return(
                <div key={item.id} style={divRectangleInner}>
                    <span class="row">
                        <span style={{width:'60%',float:'left','margin-top' : '4%',}}>
                            <font size="6"> {item.title} </font>
                        </span>
                        <span style={{width:'20%',float:'left','margin-top' : '6%',}}>
                            <font size="4">$ {parseFloat(item.price).toFixed(2)} </font>
                        </span>
                
                        <span style={{width:'20%',float:'left','margin-top' : '6%',}}>                           
                            <button key={item.id} type="button"
                            onClick={ () => this.props.addToCart(item)}>
                            ADD </button>
                        </span>       
                    </span>
                </div>
            );   
        }
        
        );
    }
      
    render(){
        return(
            <div>
                {this.createListItems()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        items:state.items,
        cartitems:state.cartitems,
        carttotal:state.carttotal
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addToCart:addToCart},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(ItemList);