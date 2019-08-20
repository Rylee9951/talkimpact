import io from 'socket.io-client'

// MUST CHANGE localhost to IP ADDRESS
const socket = io.connect('http://localhost:8000')

export default socket