import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {logout} from '../actions/auth.actions'

const ChatSidebar = (props) => {
  

  return ( 
    <div className='chatSidebar'>
      <button onClick={logout}>Logout</button>
      <p><Link to="/general">General</Link></p>
      <p><Link to="/foobar">Foobar</Link></p>
    </div>

   );
}
 
export default ChatSidebar;