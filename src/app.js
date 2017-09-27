import React, { Component } from 'react';
import ItemList from './containers/itemlist.js'
import CartList from './containers/cartlist.js'
import CartTotal from './containers/carttotal.js'


var divStyle = {
  float: 'left',
  width: '50%' 
};

var divRectangle = {
    width:'80%',
    height:'600px',
    border:'1px solid #000',
    'margin-left' : '10%'
}

var divRectangle2 = {
  width:'80%',
  height:'700px',
  border:'1px solid #000',
  'margin-left' : '10%'
}

var divRectangleInner = {
  border:'3px solid #000',
  height:'100px',
  
}

const App = () => (
  
  <div>
    
    <div style ={divStyle}>
      <center> <h1><b> Menu </b> </h1> </center>
        <div style={divRectangle}>
          <ItemList/>
        </div>
    </div>
    <div style={divStyle}>
      <center> <h1><b> Order </b> </h1> </center>
      <div style={divRectangle2}>
        <CartList/>
        <div style={divRectangleInner}>
          <CartTotal/>
        </div>
      </div>
      
    </div>
  </div>
 
  
);

export default App;
