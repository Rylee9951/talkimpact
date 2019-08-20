import React, {useEffect} from 'react';
import { join } from '../actions/chat.actions'


import ChatForm from './ChatForm'
import ChatWindow from './ChatWindow'
import ChatSidebar from './ChatSidebar'


const Room = (props) => {
  useEffect(() => {
    join(props.match.params.roomname)
  }, [props.match.params.roomname])

  return ( 
    <div className='chat'>
      <ChatSidebar/>
      <div className="chatArea">
        <ChatWindow room={props.match.params.roomname}/>
        <ChatForm room={props.match.params.roomname}/>
      </div>
    </div>

   );
}
 
export default Room;