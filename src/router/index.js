import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import Step1 from "../components/Step1"
import Step2 from "../components/Step2"
class RouterIndex extends Component {
    constructor() {
        super()
    }

    render() {

        return (
            <Router>
                <div>
                    <ul>
                        <li> <Link to='/step1'>跳转step1</Link></li>
                       <li> <Link to='/step2'>跳转到step2</Link></li>
                    </ul>
                    <Route path='/step1' component={Step1}/>
                    <Route path='/step2' component={Step2}/>
                </div>
            </Router>

        );
    }
}

export default RouterIndex;
