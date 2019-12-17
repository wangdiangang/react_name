import React, { Component } from 'react';
import { Layout,Menu } from 'element-react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
import Step1_1 from "./Step1_1"
import Step1_2 from "./Step1_2"
class Step1 extends Component {
  constructor(){
    super()
          this.obj={name:'aaaaa'}
          this.onSelect=this.onSelect.bind(this)
  }
  onSelect(){

  }
  render() {
    
    return (
      <Router>
      <div>
        <Link to='step1_1'>去往step1_1的路径</Link>
        <Link to='step1_2'>去step1-222</Link>
        step1111
        <Route path="/step1_1" component={Step1_1}></Route>
        <Route path="/step1_2" component={Step1_2}></Route>
      </div>
      </Router>
    );
  }
}

export default Step1;
