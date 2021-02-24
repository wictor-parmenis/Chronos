import React, {Component} from 'react'
import Images from 'C:\\Users\\WICTOR\\VSC_projects\\web\\Personal\\chronos\\chronos\\src\\assets\\clock.png'
import { Link, BrowserRouter, Switch, Router} from 'react-router-dom'
import AppTimer from 'C:\\Users\\WICTOR\\VSC_projects\\web\\Personal\\chronos\\chronos\\src\\pages\\AppTimer'

class AppNav extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
                <div className='nav'>
                    <img className='logo' src={Images}/>
                    <h2> <Link to="/">Chronos</Link> </h2>
                    <div className='menuNav'>
                        <ul>
                            <li><b><Link to="/timer">Timer</Link></b></li>
                            <li><b><Link to="/about">About</Link></b></li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default AppNav;