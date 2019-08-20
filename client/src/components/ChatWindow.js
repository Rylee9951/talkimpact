import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment'
import Linkify from 'react-linkify'

const ChatWindow = (props) => {
  const messages = useSelector(appState => appState.chatReducer.messages.filter(message => message.room === props.room))

  return ( 
    <div className='chatwindow'>
      {messages.map((message, i) => {
        const regex = /(https?:\/\/.*\.(?:png|jpg|gif))/i
        let img = ''
        if (regex.test(message.text)) {
          const match = message.text.match(regex)
          img = <img src={match[0]} alt={message.text}/>
        }

        return (
        <div>
          <div key={'message' + i} className="indmessage">
            <span className="user">{message.username}</span>
            <div className='message'><p><Linkify>{message.text}</Linkify><br/><span className="time">{moment(message.time).fromNow()}</span></p></div>
          </div>
          {img ? <div className="image">{img}</div> : ''}
        </div>  
        )
      })}
    </div>

   );
}
 
export default ChatWindow;