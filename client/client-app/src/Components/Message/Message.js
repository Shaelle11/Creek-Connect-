import './message.scss';
import {format} from 'timeago.js'

export default function Message({message,own}) {
    return(
        <div className={own ? 'Message own' : 'Message'}>
        <div className='messageTop'>
        <img className='messageImg' src='' alt='' />
        <p className='messageText'>
{message.text}
        </p>
        </div>
        <div className='messageBottom'>
{format(message.createdAt)}
        </div>
        </div>
    )
}