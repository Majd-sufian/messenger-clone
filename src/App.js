import React, { useState, useEffect } from 'react';
import { Button, InputLabel, Input, FormControl } from '@material-ui/core';
import './App.css';
import firebase from "firebase"
import FlipMove from "react-flip-move"
import db from './firebase'
import Message from './Message'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() =>{
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // setMessages(snapshot.docs.map(doc => doc.data()))
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    // setMessages([...messages, { username: username, text: input }])
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  useEffect(() => {
    setUsername(prompt('enter your name please!'))
  }, [])

  return (
    <div className="App">
      <img class="app__img" src="https://pluspng.com/img-png/facebook-messenger-png-png-ico-512.png" />
      <h1>Messager clone🚀</h1>
      <h2>Welcome {username}</h2>
      <form>
      <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button variant="contained" color="primary" type="submit" disabled={!input} onClick={sendMessage}>send a message</Button>
         </FormControl>
      </form>

      <FlipMove>
        {
          <ul>

            {messages.map(({id, message}) => (
              <Message key={id} username ={username} message={message} /> 
            ))}
          </ul>
        }
      </FlipMove>

    </div>
  );
}

export default App;
