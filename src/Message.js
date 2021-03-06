import React, { forwardRef} from 'react'
import './Message.css';
import { CardContent, Card, Typography } from '@material-ui/core'

// function Message({ message, username}) {
//     const isUser = username === message.username 

//     return (
//         <div className={`message ${isUser && 'message__user'}`}>
//             <Card className={isUser ? "message__userCard" : "message__guestCard"}>
//                 <CardContent    >
//                     <Typography color="white" variant="h5" component="h2">
//                         <h2>{message.username}: {message.message}</h2>
//                     </Typography>
//                 </CardContent>
//             </Card>
//         </div> 
//     )
// } 

const Message = forwardRef(({ message, username}, ref) => {
    const isUser = username === message.username 

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent    >
                    <Typography color="white" variant="h5" component="h2">
                        <p>{!isUser && `${message.username || 'Unknown User'}: `} {message.message}</p>
                    </Typography>
                </CardContent>
            </Card>
        </div> 
    )
})

export default Message
