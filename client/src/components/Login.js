import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { login } from '../actions/auth.actions'
import { Redirect } from 'react-router-dom'

const ChatForm = (props) => {
  const [username, setUsername] = useState('')
  const authorized = useSelector(appState => appState.authReducer.authorized)

  function handleSubmit(e) {
    e.preventDefault()
    login(username)
    props.history.push('/general')
  }

  return ( 
    authorized
    ?<Redirect to ='/general'/>
    :<form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Username ..." onChange={e => setUsername(e.target.value)} value={username} />
      <button type="submit">Submit name</button>
    </form>

   );
}
 
export default ChatForm;