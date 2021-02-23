import React, {Component} from 'react'
import Routes from './routes'
import AppNav from '../src/components/AppNav/AppNav'
import AppFooter from '../src/components/AppFooter/AppFooter'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {}


    }

    render(){
        return(
            <div>
                <AppNav />                
                <Routes />
                <AppFooter />
            </div>
        )
    }

 }




export default App;