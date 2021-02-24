import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AppChronos from './pages/AppChronos'
import AppTimer from './pages/AppTimer'
import AppNav from './components/AppNav/AppNav'


const Routes = () => {
    return(
            <BrowserRouter>
                <AppNav />
                <Switch>
                    <Route exact path='/' component={AppChronos}/>
                    <Route path='/timer' component={AppTimer}/>
                    <Route path='*' component={error}/>
                </Switch>
            </BrowserRouter>
    )
}

export default Routes;