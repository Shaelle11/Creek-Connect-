import axios from "axios";
import { useEffect, useState } from "react";
import "./Chat.scss";

export default function Chat({Chat, currentUser}) {
    const [user, setUser] = useState(null)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

   useEffect(() => {
       const friendId = Chat.members.find((m) => m !== currentUser._id);

       const getUser = async ()=> {
           try{
               const res = await axios('/users?userId=' + friendId);
               setUser(res.data)
            } catch (err) {
                console.log(err);
            }
       };
       getUser()
   }, [currentUser, Chat]);
    return (
        <div className='chat'>
            <img className='chatImg'
            src={user?.profilePicture ? user.profilePicture : PF+''} alt=''/>
            <span className='chatName'>{user?.username}

            </span>
        </div>
    )
}