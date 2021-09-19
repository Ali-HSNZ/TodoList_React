import Styles from "./Search.module.css";
import { SetProducts } from "../../Context/ContextProvider";
import { useState } from "react/cjs/react.development";

const Search = () => {
  const dispatch = SetProducts();

  const [search, setSearch] = useState("");

  const changeHandler= (e)=> {
      setSearch(e.target.value)
      dispatch({ type: "Search", event: e })

  }
  return (
    <div className={Styles.searchParent}>
      <input
        dir="rtl"
        className={Styles.searchInput}
        placeholder="جستجو بر اساس نام غذا"
        onChange={changeHandler}
      />
      <p className={Styles.searchParagraph} dir="rtl">
        جستجو :{" "}
      </p>
    </div>
  );
};

export default Search;
