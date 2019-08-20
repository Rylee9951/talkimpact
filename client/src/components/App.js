import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AuthRoute from './AuthRoute'

import Room from './Room'
import Login from './Login'

export default props => {
  

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path='/login' component={Login} />
          <AuthRoute exact path='/:roomname' component={Room}/>
        </div>
      </Router>
    </Provider>
  )
}