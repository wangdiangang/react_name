import React, { Component } from 'react';
import { Layout,Menu } from 'element-react';
import "./Step1_2.css"
class Step1_2 extends Component {
  constructor(){
    super()
    this.clickButton=this.clickButton.bind(this)
  }
 clickButton(){
      console.log(1111);
      
    }
  render() {
    return (
      <div>
        step1_2_1_2_1_2
        <div className='box'></div>
        <button onClick={this.clickButton}>按钮</button>
      </div>
    );
  }
}

export default Step1_2;
