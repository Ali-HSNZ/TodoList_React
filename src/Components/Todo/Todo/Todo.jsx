
import Styles from '../TodoList/TodoList.module.css'
const Todo = ({item , deleteItem , completeItem  , onEdit}) => {

   
    return ( 
       <div key ={item.id} className={`${Styles.item} ${item.complete===true && Styles.itemActive}`}>
            <p className={`${Styles.title} ${item.complete===true && Styles.titleActive}`} >{item.text} </p>
           <div className={Styles.buttons}>
               <button className={Styles.Edit} onClick={onEdit}>Edit</button>
               <button className={Styles.Complete}  onClick={()=>completeItem(item)}>Complete</button>
               <button className={Styles.delete} onClick={()=>deleteItem(item)}>Delete</button>
           </div>
       </div>
     );
}
 
export default Todo;