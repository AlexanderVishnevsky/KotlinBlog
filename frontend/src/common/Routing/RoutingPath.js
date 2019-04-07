import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from '../Access/Login'
import Logout from '../Access/Logout'
import PostPage from '../Blog/PostPage'

const RoutingPath = () => (
    <main>
        <Switch>
            <Route exact path='/' component={PostPage}/>
            <Route path='/login' component={Login}/>
            <Route path='/logout' component={Logout}/>
        </Switch>
    </main>
);

export default RoutingPath