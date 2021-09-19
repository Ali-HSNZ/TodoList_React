import Styles from './Item.module.css'
import image from '../../image/1.jpg'
import { Products } from '../Context/ContextProvider';

const Item = () => {
    const products = Products()
    console.log()
    return ( 
        
        <div className={Styles.parent}>
            <div className={Styles.parent_Main}>
                <>
                
                {products.map((p,index)=> {

                    

                    return(
                        

                        <div className={Styles.item} key={index}>


                            <div className={Styles.Price_Btn}>
                                <p className={Styles.price} dir='rtl'>{p.Price} ريال</p>
                                <button className={Styles.Submit}>سفارش غذا</button>
                            </div>

                            <div className={Styles.Paragraph_Description}>
                                <p dir='rtl' className={Styles.Paragraph}>{p.Name}</p>
                                <p dir='rtl'>{p.describe}</p>
                            </div>

                            <div className={Styles.image}>
                                <img src={image} alt='عکس غذا'/>
                            </div>

                        </div>
           
                    )
                })}

               </>
            </div>
        </div>
    );
}
 
export default Item;