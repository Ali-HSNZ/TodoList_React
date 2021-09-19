import  Styles  from './Filter.module.css';
const Filter = () => {
    return ( 
        <div className={Styles.filterParent}>


            <div className={Styles.group}>

                <select className={`${Styles.groupSelect} ${Styles.categori_select}`}>
                    <option>قیمه</option>
                    <option>سالاد</option>
                    <option>آبگوشت</option>
                </select>
                
                <p dir='rtl' className={Styles.groupParagraph}>دسته بندی : </p>

            </div>

            <div className={Styles.group}>

                <select className={`${Styles.groupSelect} ${Styles.sort_select}`}>
                    <option>بیش ترین</option>
                    <option>کم ترین</option>
                </select>

                <p dir='rtl' className={Styles.groupParagraph}> قیمت : </p>

            </div>
        </div>

     );
}
 
export default Filter;