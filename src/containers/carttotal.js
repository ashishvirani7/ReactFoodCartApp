import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CartTotal extends Component{
    render(){
        return(
            <span class="row">
                <span style={{width:'60%',float:'left','margin-top' : '4%','margin-left' : '8%',}}>
                    <font size="6"><b> Total :</b> </font>
                </span>
                <span style={{width:'30%',float:'left','margin-top' : '4%',}}>           
                <font size="6"><b>   $ {parseFloat(this.props.carttotal.total).toFixed(2)}  </b> </font>
                </span>
            </span>
            
        );
    }
}

function mapStateToProps(state){
    console.log(state.carttotal.total);
    return{
        carttotal : state.carttotal
    };
}
export default connect(mapStateToProps)(CartTotal);