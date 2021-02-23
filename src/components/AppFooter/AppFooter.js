import React, {Component} from 'react'
import PlayStore from 'C:\\Users\\WICTOR\\VSC_projects\\web\\Personal\\chronos\\chronos\\src\\assets\\playstore.png'

class AppFooter extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <footer>
            <div className='downloadApp centerContent'>
                <h3>Download our app in play store</h3>
                <img className='playStore' src={PlayStore}></img>
            </div>
            <div className='contacts'>
                <ul>
                    <h3>Contacts</h3>
                    <li><b>Email:</b>  wictortec@gmail.com</li>
                    <li><b>Youtube:</b>  Wictor Tec</li>
                </ul>
            </div>

            <div className='form centerContent'>
                <h3>Receive week tips about produtivity :D</h3>
                <form> 
                    <input type='email' placeholder='Your best email' name='email'></input>
                    <br></br>
                    <div className='btnForm'>
                        <p>Subscribe</p>
                    </div>
                </form>
            </div>
        </footer>
        )
    }
}

export default AppFooter;