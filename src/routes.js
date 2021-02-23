import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AppChronos from './pages/AppChronos'


const Routes = () => {
    return(
            <BrowserRouter>
                <Route 
                exact path='/' component={AppChronos}
                />
            </BrowserRouter>
    )
}

export default Routes;