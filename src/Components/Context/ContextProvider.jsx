import React,{ createContext, useContext, useReducer } from "react";

const initialState = ([
    {Name : "ماکارونی" ,Price : 250000 ,describe : ". این ماده خوراکی بیشتر در کارخانجات به صورت خشک تولید شده و پیش از خوردن جوشانده می‌شود. معنا و شکل ماکارونی در هر کشور یا منطقه تفاوت دارد. ",categori : "پاستا",imgSrc : ''},
    {Name : "قورمه سبزی" ,Price : 390000 ,describe : "قورمه سبزی سمبل غذاهای ایرانی است و کمتر کسی هست که این غذای اصیل ایرانی را با سبزی‌های تازه دوست نداشته باشد",categori : "خورشت",imgSrc : ''},
    {Name : "قیمه با سیب زمینی" ,Price : 180000 ,describe : "یکی دیگر از خورشت‌های خوشمزه و خوش رنگ و لعاب برای ناهار ظهر قیمه با سیب زمینی است. این خورشت خوشمزه برای ماه محرم زبانزد است",categori : "خورشت ",imgSrc : ''},
    {Name : "بامیه" ,Price : 20000 ,describe : "خورشت بامیه یکی از غذاهای خوشمزه و بی‌نظیر از خطه‌ی جنوب ایران است. بامیه یکی از گیاهان ضد افسردگی است. بامیه برای کنترل کلسترول خون مناسب است. مثل سویا پروتئین دارد و برای درمان کبد چرب مفید است.",categori : "خورشت ",imgSrc : ''},
    {Name : "آبگوشت" ,Price : 410000 ,describe : "آبگوشت یک غذای سنتی و خوشمزه است که دورهمی می‌چسبد و به همین دلیل اکثر ایرانیان در ظهر جمعه آن را درست می‌کنند. آبگوشت از ترکیب گوشت تازه گوسفندی استخوان دار به همراه نخود، لوبیا و سیب زمینی درست می‌شود",categori : "نامشخص",imgSrc : ''},
  
])

const initialStateCategory = ([])
    



const reduce = (state , action) => {
    switch(action.type){
        
        case 'AddProduct' : {
            return [...state,{Name : action.Name, Price : action.Price , describe : action.Des , categori: action.Category, imgSrc : action.ImgSrc}]
        }
        case 'Search' : {
            
            // const value = action.event
            
            const value = action.event.target.value
            // 
                if(value ===""){
                    return state
                }else{
                    return state.filter(item => item.Name.includes(value))
                }
                 
        }
        default: return state


    }
}
const reduceCategory = (state , action) => {
    switch(action.type){
        case 'AddCategory' : {

            return [...state,{name : action.event}]
        }
        default: return state
    }
}


const Product = createContext()
const SetProduct = createContext()

const Categori = createContext()
const SetCategori = createContext()

const  ContextProvider= ({children}) => {


    const [products,dispatch] = useReducer( reduce , initialState)
    const [category,dispatchCategory] = useReducer( reduceCategory , initialStateCategory)

    return ( 
       
        <Product.Provider value={products}>
            <SetProduct.Provider value={dispatch}>

                <Categori.Provider value={category}>
                    <SetCategori.Provider value={dispatchCategory}>
                            {children}
                    </SetCategori.Provider>
                </Categori.Provider>
               
            </SetProduct.Provider>
        </Product.Provider>
    );
}
 
export default ContextProvider;

export const Products = () => useContext(Product)  
export const SetProducts = () => useContext(SetProduct)  

export const Category = () => useContext(Categori)  
export const SetCategory = () => useContext(SetCategori)  