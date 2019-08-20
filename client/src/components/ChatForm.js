import React, { useState } from 'react';
import { sendMessage } from '../actions/chat.actions'

const ChatForm = (props) => {
  const [message, setMessage] = useState('');
  
  
  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(message, props.room)
    setMessage('')
  }

  return ( 
    <form className='messageInput' onSubmit={handleSubmit}>
      <textarea  value={message} onChange={e => setMessage(e.target.value)} placeholder='Type your message ...'/>
      <button type='submit' onClick={handleSubmit}>Send</button>
    </form>

   );
}
 
export default ChatForm;