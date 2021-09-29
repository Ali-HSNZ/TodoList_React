import { useState } from 'react';
import NavMenu from '../Navbar/Nav';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

import Styles from './Todo.module.css'
const Todo = () => {
    const [item,setitem] = useState ([])

    const AddTodoHandler = (value) =>{

        const newItem = {id : (Math.random()*Math.random()*100) , text : value , complete : false}
        setitem([...item , newItem])
    }
    const deleteHandler = (e) => {
        const items = [...item]    
            setitem( items.filter( p => p.id !== e.id) )
                // e.id
    }
    const completeHandler = (e) => {

        const index = item.findIndex(p => p.id === e.id)
        const FinedItems = {...item[index]}
        FinedItems.complete = !e.complete

        const AllItems = [...item]
        AllItems[index] = FinedItems;

        setitem(AllItems)
     
    }
    const updateTodo = (e , value)=>{
        const findIndex = item.findIndex(items => items.id === e)
        const newItem = {...item[findIndex]};

        newItem.text = value

        const AllItem = [...item]
        AllItem[findIndex]=newItem;

        setitem(AllItem)
    }
    return ( 
        <div className={Styles.parent}>
            <div className={Styles.parent_center}>
                
                <div className={Styles.main}>
                    <div className={Styles.title}><h3>Todo : List</h3></div>
                    <NavMenu item={item}/>
                    <TodoForm AddTodoHandler = {AddTodoHandler}/>
                    <TodoList items = {item} onUpdate={updateTodo} deleteItem = {deleteHandler} completeItem = {completeHandler}/>
                </div>
                
            </div>
           
        </div>
    );
}
 
export default Todo;