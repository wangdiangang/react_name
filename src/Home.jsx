import React, { Component } from 'react';
import { Layout,Menu } from 'element-react';

class App extends Component {
  constructor(){
    super()
          this.obj={name:'aaaaa'}
          this.onSelect=this.onSelect.bind(this)
  }
  onSelect(){

  }
  render() {
    
    return (
      <div>
        <div className="">
            <h2>这是一个jsx页面</h2>
        </div>
       
      </div>
    );
  }
}

export default App;
