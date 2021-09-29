import { useState } from 'react';
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';

import Styles from './TodoList.module.css'


const TodoList = ({items , deleteItem , completeItem , onUpdate}) => {

    const [edit , setEdit]  = useState({id : null , text : '' , complete : false})

        const submitEdit = (value)=> {
            onUpdate(edit.id , value)
            setEdit({id : null , text : ''})
            console.log(value)
        }
    const renderItem =()=> {

        if(items.length === 0) { return(
                <div className={Styles.noItemInList}>
                    <p>No Data on List </p>
                    <span style={{color : 'green'}}> ( plz Add Todo )</span>
                </div>
            )
        }



        return ( 
            <div className={Styles.todoList}>
                {items.map((element) => { 
                        return(
                            <Todo
                                key={element.id}
                                onEdit={ ()=> setEdit(element)}
                                item={element}
                                deleteItem={()=>deleteItem(element)}
                                completeItem = {()=>completeItem(element)}
                            />
                        )
                    })
                }
            </div>
        );           
    }
    return <div>{
        edit.id ? <TodoForm AddTodoHandler = {submitEdit} edit={edit}/> :  renderItem()
        }</div>
}
 
export default TodoList;