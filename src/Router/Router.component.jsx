import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from '../pages/Hompage'
import Cart from '../pages/Cart'


const Router = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Homepage} />

                <Route exact path='/cart' component={Cart} />
            </Switch>
        </div>
    );
}

export default Router;
