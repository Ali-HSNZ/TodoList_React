import {useEffect, useRef, useState } from 'react';
import Styles from './AddTodo.module.css'


const TodoForm = (props) => {
    const [value,setValue] = useState(props.edit ? props.edit.text : "")

    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    const changeHandler = (e) => {
        setValue(e.target.value)
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        if(!value){
            inputRef.current.focus()
            return;
        }
        
        inputRef.current.focus()
        inputRef.current.value = "" 
        setValue('')
        props.AddTodoHandler(value) 
    }

    return ( 
        <form onSubmit={e => e.preventDefault} className={Styles.addTodo}>    
            <input ref={inputRef} type="text" value={value} style={props.edit && {border : '1px solid green' , backgroundColor : '#dbffdc'}} onChange={changeHandler} placeholder={props.edit ? "Update Todo " : "Add Todo"}/>
            <button type='submit' onClick={submitHandler} style={props.edit && {border : '1px solid green' , backgroundColor : '#bdffbf'}}>{props.edit ? "Update" : "Add"}</button>
        </form>
    )
           

        
    
}
 
export default TodoForm;