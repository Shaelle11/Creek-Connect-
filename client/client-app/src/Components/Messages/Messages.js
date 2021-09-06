import './Messages.scss';
import NavBar from '../../animations/Burger/NavBar';
import Chat from '../Chat/Chat';
import Message from '../Message/Message';
import ChatOnline from '../chatOnline/ChatOnline';
import { useContext, useEffect, useState, useRef } from 'react';
import { AuthContext } from '../../Components/Context/AuthContext';
import axios from 'axios';

export default function Messages() {
const{Chat, setChat} = useState([]);
const{currentChat, setCurrentChat} = useState([null]);
const{messages, setMessages} = useState([]);
const{newMessage, setNewMessage} = useState('');
    const {user} = useContext(AuthContext);
    const scrollRef = useRef();

    useEffect(() => {
        const getChat = async () => {
            try{
        const res = await axios.get('/messages/' +user._id);
        setChat(res.data);
            } catch(err) {
    console.log(err);
            }
        };
        getChat();
    }, [user._id]);

    useEffect(() => {
        const getMessages = async ()=> {
            try{
   const res = await axios.get('/messages' + currentChat._id);
   setMessages(res.data);
   setNewMessage('')
            }catch(err){
                console.log(err);
            }
        };

        getMessages(  )
    }, [currentChat]);
    const handleSubmit= async (e)=> {
    e.preventDefault();
    const message = {
        sender:user._id,
        text: newMessage,
        chatid: currentChat._id,

    };

    try{
const res = await axios.post('/messages', message);
setMessages([...messages, res.data])
    } catch(err){
        console.log(err)
    }
    };
    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'})
    })

    return (
        <>
     <NavBar />
     <div className='messages'> 
     <div className='chatMenu'>
         <div className='chatMenuWrapper'> 
         menu</div>
    <input placeholder='Search for Friends' className='chatMenuInput' />
    {Chat.map((c) =>(
        <div onClick={()=>setCurrentChat(c)}>
        <Chat Chat={c} currentUser={user}/>
        </div>
    ))}
    </div>
    </div>
     <div className='chatBox'>
         
         <div className='chatBoxWrapper'> 
         {
             currentChat ?

             <>
         
         <div className='chatBoxTop'>
             {messages.map((m)=> (
                 <div ref={scrollRef}>
 <Message message={m} own={m.sender === user._id} />
                 </div>
               
             ))}
             
             </div>
             <div className='ChatBoxBottom'>
                 <textarea className='chatMessageInput' placeholder='Type here...'
                 onChange={(e) =>setNewMessage(e.target.value)}
                 value={newMessage}></textarea>
                 <button className='chatSubmitButton' onClick={handleSubmit}>Enter</button>
                 </div></> 
                  : ( <span className='noChatText'>Start Chatting</span> )}
                  </div>
     </div>
     <div className='chatOnline'>
         <div className='chatOnlineWrapper'>
            <chatOnline />
            </div></div>
        </>
    )
}