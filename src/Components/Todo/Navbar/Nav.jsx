import Styles from './Nav.module.css'

const NavMenu = ({item}) => {
    const notCompletedCount = item.filter( p => p.complete === false).length
    
    return ( 
        <div className={Styles.menuParent}>
            {item.length!==0 ?
            <>
                <span className={Styles.NumberTodos}>{notCompletedCount}</span>
                <p> Are Not Completed</p>
            </>
            :
            <>
                <span className={Styles.span}>Good!</span>
                <p> Set Your Today Todos</p>
            </>
        }
            

        </div>
    );
}
 
export default NavMenu;