import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MassageItem from "./MassageItem/MassageItem";

const Dialogs = (props) => {


    let newMessage = React.createRef()

    let addMessage = () => {
        let text = newMessage.current.value
        alert(text)
    }

    let message = props.state.messages.map(m => <MassageItem message={m.message} id={m.id}/>)
    let dialog = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    return (
        <div className={s.container}>
            <h1>Dialogs</h1>
            <div className={s.dialogs}>
                {dialog}
            </div>
            <div className={s.messagesArea}>
                <div className={s.messages}>
                    {message}
                </div>
                <div>
                    <textarea className={s.input} ref={newMessage}></textarea>
                    <button className={s.button} onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;