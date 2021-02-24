import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AppError extends Component{
    constructor(props){
        super(props);
        this.state = {}

        // Binded functions
    }
    render(){
        return(
            <div>
                    <h2>Ops, any error happening...</h2>
                    <h3>Maybe you can find this sites: </h3>
                    <div>
                        <ul>
                            <li><Link to='/'>Chronos</Link></li>
                            <li><Link to="/about">About</Link></li>  
                        </ul>
                          
                    </div>  
            </div>
        )
    }

    // Methods here
}

export default AppError;