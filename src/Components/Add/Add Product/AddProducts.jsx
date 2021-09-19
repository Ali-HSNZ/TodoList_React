import { useState } from 'react';
import Styles from './AddProducts.module.css'
import { setProducts , /*Category */} from '../../Context/ContextProvider';

const AddProduct = () => {

    const dispatch = setProducts()
    // const categoryState = Category()
    const categoryState =0

    const [name , setName] = useState('')
    const [price , setPrice] = useState('')
    const [des , setDes] = useState('')
    const [category , setCategory] = useState('')
    const [imgSrc , setSrc] = useState('')

    // console.log('name : ', name , ' | price : ', price,' | des : ', des,' | category : ', category,' | imgSrc : ', imgSrc)

    
    return ( 
        <div className={Styles.addProduct}>

            
                
                <div className={Styles.group}>
                    <input value={name} onChange={ e => setName(e.target.value) } className={`${Styles.group_input} ${Styles.group_Name_input}`} dir='rtl' type="text" placeholder="نام غذا  را وارد کنید... ( از 2 کاراکتر )"/>
                    <p className={Styles.group_Name} dir='rtl'>نام غذا : </p>   
                </div>

                <div className={Styles.group}>
                    <input value={price} onChange={ e => setPrice(e.target.value) } className={`${Styles.group_input} ${Styles.group_Price_input}`} dir='rtl' type="number" placeholder="قیمت غذا... ( از 1000 ریال )"/>
                    <p className={Styles.group_Name} dir='rtl'>قیمت  : </p>   
                </div>

                <div className={Styles.group}>
                    <input value={des} onChange={ e => setDes(e.target.value) } className={`${Styles.group_input} ${Styles.group_Description_input}`} dir='rtl' type="text" placeholder="توضیحات غذا  را وارد کنید... ( از 2 کاراکتر )"/>
                    <p className={Styles.group_Name} dir='rtl'> توضیحات : </p>   
                </div>

                <div className={Styles.group}>
                    <select value={category} onChange={ e => setCategory(e.target.value) } className={`${Styles.group_input} ${Styles.group_Category_input}`}>
                        {categoryState.length === 0 && <option >انتخاب گروه غذایی </option> } 
                        {categoryState.map((p,index)=> {return  <option key={index}>{p.name}</option>})}
                    </select>
                    <p className={Styles.group_Name} dir='rtl'>دسته بندی ( گروه )  : </p>   
                </div>

                <div className={Styles.group}>
                    <input hidden onChange={ e => setSrc(e.target.value) } accept=".jpg, .jpeg, .png" className={`${Styles.group_input} ${Styles.group_setImage_input}`} dir='rtl' type="file" id="inputSetImage" placeholder="توضیحات غذا  را وارد کنید..."/>
                    
                    <label className={`${Styles.group_input} ${Styles.group_setImage}`} htmlFor="inputSetImage">آپلود عکس </label>

                    <p className={Styles.group_Name}  dir='rtl'> عکس : </p>   
                </div>
               
                <button onClick={()=>{ return price >= 1000 && name.length >= 2 && des.length >= 2 && dispatch({type : "AddProduct" , Name : name , Price : price , Des :des , Category : category ,ImgSrc : imgSrc})}} className={Styles.submitButton}>ثبت غذا</button>


               
            </div>
    );
}
 
export default AddProduct;