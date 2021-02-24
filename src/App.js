import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AppNav from '../src/components/AppNav/AppNav'
import AppFooter from '../src/components/AppFooter/AppFooter'
import AppChronos from './pages/AppChronos'
import AppTimer from './pages/AppTimer'
import AppAbout from './pages/AppAbout'
import AppError from './pages/AppError'
import AppCourse from './pages/AppCourse'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {}


    }

    render(){
        return(
            <div>
                <Router>
                    <AppNav /> 
                    <Switch>

                        <Route exact path="/">
                            <AppChronos />
                        </Route>
                        
                        <Route path="/timer">
                            <AppTimer />
                        </Route>

                        <Route path="/about">
                            <AppAbout />
                        </Route>

                        <Route path="/course/:id" component={AppCourse}>
                            <AppCourse />
                        </Route>



                        <Route path="*">
                            <AppError />
                        </Route>

                        
                    </Switch>               
                    <AppFooter />
                </Router>
            </div>
        )
    }

 }




export default App;