import React, {Component} from 'react'
import Images from 'C:\\Users\\WICTOR\\VSC_projects\\web\\Personal\\chronos\\chronos\\src\\assets\\clock.png'


class AppNav extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
                <div className='nav'>
                    <img className='logo' src={Images}/>
                    <h2>Chronos</h2>
                    <div className='menuNav'>
                        <ul>
                            <li><b>Timer</b></li>
                            <li><b>Blog meditation</b></li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default AppNav;