import React,{Component} from "react";
class Button extends Component{
    constructor(){
        super()
        this.click=this.click.bind(this)
    }
    click(){
        console.log('butyon');
        
    }
    render(){
        return(
            <div>
                <div onClick="{this.click}">Button</div>
            </div>
        )
    }
}